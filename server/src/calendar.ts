import { calendar_v3, google } from "googleapis";
import { JWT } from "google-auth-library";
import { google_service_account } from "./env_config";

export class Calendar {
    private auth: JWT;
    private calendar: calendar_v3.Calendar;
    private calendarId: string;
    private useCache: boolean;

    private eventSourceCache: EventSource[]  = [];
    private eventViewCache: EventViewModel[] = [];
    private cacheDate: Date;
    private static cacheAhead: number = 31; // Number of days to cache ahead.

    public static Months: string[] = ["January", "February", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    public static MonthsCut: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    constructor(account: google_service_account, calendarId: string, useCache: boolean) {
        this.auth = new JWT({
            email: account.client_email,
            key: account.private_key,
            scopes: ["https://www.googleapis.com/auth/calendar.readonly"]
        });

        // Init google calendar api.
        this.calendar = google.calendar({ version: "v3", auth: this.auth });

        this.calendarId = calendarId;

        this.useCache = useCache;

        this.cacheDate = new Date();
        this.cacheDate.setDate(this.cacheDate.getDate() - 1);
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
                month: Calendar.Months[startDateTime.getMonth()],
                monthCut: Calendar.MonthsCut[startDateTime.getMonth()],
                year: startDateTime.getFullYear()
            },
            endDate: {
                day: endDateTime.getDate(),
                month: Calendar.Months[endDateTime.getMonth()],
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
    private async getEventsUpAhead(numberOfEventsAhead: number = 5): Promise<EventSource[]> {
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
     * Get new items for the cache.
     * @param startDate The start date.
     */
    private async getNewCache(startDate: Date): Promise<void> {
        console.log("Fetching new cache for the events...")

        const endDate: Date = new Date();
        endDate.setDate(endDate.getDate() + Calendar.cacheAhead);
        endDate.setHours(23, 59, 0, 0); // 23:59:00.000.
        
        const eventSources: EventSource[] = await this.getEvents(startDate, endDate, Calendar.cacheAhead);
        const eventViewModels: EventViewModel[] = Calendar.ConvertToViewModels(eventSources);

        this.eventSourceCache = eventSources;
        this.eventViewCache   = eventViewModels;
        this.cacheDate        = startDate;
    }

    public async GetFirstThreeEventsView(): Promise<EventViewModel[]> {
        if (this.useCache && this.getTodaysDate() > this.cacheDate) await this.getNewCache(this.getTodaysDate());

        if (this.useCache) { return this.eventViewCache.slice(0, 3); }
        else return Calendar.ConvertToViewModels(await this.getEventsUpAhead(3));
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
        month: string,
        monthCut: string,
        year: number
    },
    endDate: {
        day: number,
        month: string,
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