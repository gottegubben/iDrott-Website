import { calendar_v3, google } from "googleapis";
import { JWT } from "google-auth-library";
import { google_service_account } from "./env_config";

export class Calendar {
    private auth: JWT;
    private calendar: calendar_v3.Calendar;
    private calendarId: string;

    private lastCacheDate: Date;
    private cachedEvents: EventViewModel[] = [];
    private cachedMonthsDate: Map<number, Date[]> = new Map<number, Date[]>();
    private maxCachedEvents: number = 90;

    public static Months: string[] = ["January", "February", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    public static MonthsCut: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    public static Days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    constructor(account: google_service_account, calendarId: string, useCache: boolean) {
        this.auth = new JWT({
            email: account.client_email,
            key: account.private_key,
            scopes: ["https://www.googleapis.com/auth/calendar.readonly"]
        });

        // Init google calendar api.
        this.calendar = google.calendar({ version: "v3", auth: this.auth });

        this.calendarId = calendarId;

        this.lastCacheDate = new Date();
        this.lastCacheDate.setDate(this.lastCacheDate.getDate() - 1);
    }

    /**
     * A function for converting a raw event source to a real event source object.
     * @param obj The object being the raw response data.
     * @returns An event source.
     */
    private mapRawToEventSource(obj: any): EventSource {
        return obj as EventSource;
    }

    /**
     * A function for converting an event source to a view model.
     * @param eventSource The event source.
     * @returns An event view model.
     */
    public static ConvertToViewModel(eventSource: EventSource): EventViewModel {
        const startDateTime: Date = new Date(eventSource.start.dateTime);
        const endDateTime: Date = new Date(eventSource.end.dateTime);

        const temp: EventViewModel = {
            id: eventSource.id,
            title: eventSource.summary,
            description: eventSource.description,
            startTime: `${startDateTime.getHours().toString().padStart(2, "0")}:${startDateTime.getMinutes().toString().padStart(2, "0")}`,
            endTime: `${endDateTime.getHours().toString().padStart(2, "0")}:${endDateTime.getMinutes().toString().padStart(2, "0")}`,
            startDate: {
                day: startDateTime.getDate(),
                weekDay: Calendar.Days[startDateTime.getDay()],
                month: Calendar.Months[startDateTime.getMonth()],
                monthNumber: startDateTime.getMonth(),
                monthCut: Calendar.MonthsCut[startDateTime.getMonth()],
                year: startDateTime.getFullYear()
            },
            endDate: {
                day: endDateTime.getDate(),
                weekDay: Calendar.Days[endDateTime.getDay()],
                month: Calendar.Months[endDateTime.getMonth()],
                monthNumber: endDateTime.getMonth(),
                monthCut: Calendar.MonthsCut[endDateTime.getMonth()],
                year: endDateTime.getFullYear()
            }
        };

        return temp;
    }

    /**
     * Converts a list of event sources to a list of event view models.
     * @param eventSources A list of event sources.
     * @returns A list of event view models.
     */
    public static ConvertToViewModels(eventSources: EventSource[]): EventViewModel[] {
        return eventSources.map(this.ConvertToViewModel);
    }

    /**
     * Gets the events up ahead to a certain max threshold, starting from closest.
     * @param numberOfEventsAhead max events to send back.
     * @returns A list of event sources.
     */
    private async getEventsUpAhead(numberOfEventsAhead: number = 3): Promise<EventSource[]> {
        try {
            const response = await this.calendar.events.list({
                calendarId: this.calendarId,
                timeMin: new Date().toISOString(),
                maxResults: numberOfEventsAhead,
                singleEvents: true,
                orderBy: "startTime"
            });
            
            if (!response.data.items || response.data.items.length === 0) {
                return [];
            }

            return response.data.items.map(this.mapRawToEventSource);
        }
        catch { }

        return [];
    }

    /**
     * Fetches all the events between a given time span.
     * @param start Start date.
     * @param end End date.
     * @param maxEvents Max amount of events to fetch.
     * @returns Get all the events between the specified time span.
     */
    private async getEvents(start: Date, end: Date, maxEvents: number = 30): Promise<EventSource[]> {
        try {
            const response = await this.calendar.events.list({
                calendarId: this.calendarId,
                timeMin: start.toISOString(),
                timeMax: end.toISOString(),
                maxResults: maxEvents,
                singleEvents: true,
                orderBy: "startTime"
            });
            
            if (!response.data.items || response.data.items.length === 0) {
                return [];
            }

            return response.data.items.map(this.mapRawToEventSource);
        }
        catch { }

        return [];
    }

    /**
     * A function for returning todays date.
     * @returns Todays date at 00:00:00.000.
     */
    private getTodaysDate(): Date {
        const temp: Date = new Date();
        temp.setHours(0, 0, 0, 0);
        return temp;
    }

    /**
     * Checks if the cache is out of date or not.
     * @returns True if the cache is out of date by one day.
     */
    private cacheOutOfDate(): boolean {
        const today = this.getTodaysDate();

        return today.getFullYear() > this.lastCacheDate.getFullYear() ||
            today.getMonth() > this.lastCacheDate.getMonth() ||
            today.getDate() > this.lastCacheDate.getDate();
    }

    /**
     * Gets the start date of an event.
     * @returns A date.
     */
    private getStartDateOfEventViewModel(event: EventViewModel): Date {
        return new Date(event.startDate.year, event.startDate.monthNumber, event.startDate.day);
    }

    /**
     * Gets the end date of an event.
     * @return A date.
     */
    private getEndDateOfEventViewModel(event: EventViewModel): Date {
        return new Date(event.endDate.year, event.endDate.monthNumber, event.endDate.day);
    }

    /**
     * Checks the cache to see if it's up to date and if not
     * updates the cache.
     */
    private async checkCache(): Promise<void> {
        if (this.cacheOutOfDate()) {
            console.log("[Server] Cache was out of date, retrieving new data!\n");

            this.cachedEvents = []; // Reset the cached events.

            const today = this.getTodaysDate();
            const yearAhead = this.getTodaysDate();
            yearAhead.setFullYear(yearAhead.getFullYear() + 1, yearAhead.getMonth() - 1);

            const rawEvents = await this.getEvents(today, yearAhead, this.maxCachedEvents);

            const events = Calendar.ConvertToViewModels(rawEvents);

            this.cachedEvents = events;

            this.cachedMonthsDate.clear(); // Clear the maps!

            for (let i = 0; i < 12; i++) { // For each month, cache the dates.
                const eventsOfMonth = events.filter(x => x.startDate.monthNumber === i);

                this.cachedMonthsDate.set(i, eventsOfMonth.map(x => this.getStartDateOfEventViewModel(x)));
            }

            this.lastCacheDate = new Date();
        }
    }

    /**
     * API function that gets the dates of which there are events.
     * @returns A list of dates containing events of a certain month.
     */
    public async GetEventsDateOfMonth(month: number): Promise<Date[]> {
        await this.checkCache();

        const dates = this.cachedMonthsDate.get(month);

        return dates ? dates : [];
    }

    /**
     * API function that retrieves the events in between a certain span.
     * @returns A list of events.
     */
    public async GetEventsOfSpan(dateMin: Date, dateMax: Date): Promise<EventViewModel[]> {
        await this.checkCache();

        const events = this.cachedEvents.filter(x => {
            const date = this.getStartDateOfEventViewModel(x);

            const ret = dateMin.valueOf() <= date.valueOf() && date.valueOf() <= dateMax.valueOf();
            
            return ret;
        });
        
        return events;
    }

    /**
     * API function that retrieves the three first events coming up.
     * @returns The three events coming up.
     */
    public async GetThreeFirstEvents(): Promise<EventViewModel[]> {
        await this.checkCache();

        return this.cachedEvents.slice(0, 3);
    }
}

/**
 * The event view model. Will be the data sent to the server.
 */
export interface EventViewModel {
    id: string,
    title: string,
    description: string,
    startTime: string,
    endTime: string,
    startDate: {
        day: number,
        weekDay: string,
        month: string,
        monthNumber: number,
        monthCut: string,
        year: number
    },
    endDate: {
        day: number,
        weekDay: string,
        month: string,
        monthNumber: number,
        monthCut: string,
        year: number
    }
};

/**
 * Google API event source definition.
 * See here: https://developers.google.com/calendar/api/v3/reference/events.
 */
export interface EventSource {
    kind: string,
    etag: string,
    id: string,
    status: string,
    htmlLink: string,
    created: Date,
    updated: Date,
    summary: string,
    description: string,
    location: string,
    colorId: string,
    creator: {
        id: string,
        email: string,
        displayName: string,
        self: boolean
    },
    organizer: {
        id: string,
        email: string,
        displayName: string,
        self: boolean
    },
    start: {
        date: Date,
        dateTime: Date,
        timeZone: string
    },
    end: {
        date: Date,
        dateTime: Date,
        timeZone: string
    },
    endTimeUnspecified: boolean,
    recurrence: [
        string
    ],
    recurringEventId: string,
    originalStartTime: {
        date: Date,
        dateTime: Date,
        timeZone: string
    },
    transparency: string,
    visibility: string,
    iCalUID: string,
    sequence: number,
    attendees: [
        {
        id: string,
        email: string,
        displayName: string,
        organizer: boolean,
        self: boolean,
        resource: boolean,
        optional: boolean,
        responseStatus: string,
        comment: string,
        additionalGuests: number
        }
    ],
    attendeesOmitted: boolean,
    extendedProperties: {
        private: {
        key: string
        },
        shared: {
        key: string
        }
    },
    hangoutLink: string,
    conferenceData: {
        createRequest: {
        requestId: string,
        conferenceSolutionKey: {
            type: string
        },
        status: {
            statusCode: string
        }
        },
        entryPoints: [
        {
            entryPointType: string,
            uri: string,
            label: string,
            pin: string,
            accessCode: string,
            meetingCode: string,
            passcode: string,
            password: string
        }
        ],
        conferenceSolution: {
        key: {
            type: string
        },
        name: string,
        iconUri: string
        },
        conferenceId: string,
        signature: string,
        notes: string,
    },
    gadget: {
        type: string,
        title: string,
        link: string,
        iconLink: string,
        width: number,
        height: number,
        display: string,
        preferences: {
        key: string
        }
    },
    anyoneCanAddSelf: boolean,
    guestsCanInviteOthers: boolean,
    guestsCanModify: boolean,
    guestsCanSeeOtherGuests: boolean,
    privateCopy: boolean,
    locked: boolean,
    reminders: {
        useDefault: boolean,
        overrides: [
        {
            method: string,
            minutes: number
        }
        ]
    },
    source: {
        url: string,
        title: string
    },
    workingLocationProperties: {
        type: string,
        homeOffice: string,
        customLocation: {
        label: string
        },
        officeLocation: {
        buildingId: string,
        floorId: string,
        floorSectionId: string,
        deskId: string,
        label: string
        }
    },
    outOfOfficeProperties: {
        autoDeclineMode: string,
        declineMessage: string
    },
    focusTimeProperties: {
        autoDeclineMode: string,
        declineMessage: string,
        chatStatus: string
    },
    attachments: [
        {
        fileUrl: string,
        title: string,
        mimeType: string,
        iconLink: string,
        fileId: string
        }
    ],
    birthdayProperties: {
        contact: string,
        type: string,
        customTypeName: string
    },
    eventType: string
}