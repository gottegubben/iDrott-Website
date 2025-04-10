/**
 * Calendar API mock for testing.
*/

import type { IEventViewModel } from "../viewmodels/IEventViewModel";
import type { ICalendarAPI } from "./ICalendarAPI";

export class RealCalendar implements ICalendarAPI {
    private static instance: RealCalendar;

    private constructor() { }

    static getInstance(): RealCalendar {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new RealCalendar();
            return this.instance;
        }
    }

    getEventsAhead(): IEventViewModel[] {
        return [];
    }

    getEventsDateOfMonth(month: number): Date[] {
        let dates: Date[] = [];

        fetch("/api/GetEventsOfSpan", {
            method: "GET",
            body: JSON.stringify(month)
        })
        .then(response => response.json())
        .then(data => dates = data as Date[]);

        return dates;
    }

    getEventsOfSpan(dateMin: Date, dateMax: Date): IEventViewModel[] {
        let events: IEventViewModel[] = [];

        fetch("/api/GetEventsOfSpan", {
            method: "GET",
            body: JSON.stringify({
                dateMin,
                dateMax
            })
        })
        .then(response => response.json())
        .then(data => events = data as IEventViewModel[]);

        return events;
    }

    getThreeFirstEvents(): IEventViewModel[] {
        let events: IEventViewModel[] = [];

        fetch("/api/GetThreeFirstEvents", {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => events = data as IEventViewModel[]);

        return events;
    }
}