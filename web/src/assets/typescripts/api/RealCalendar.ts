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

    getEventsAhead(): Promise<IEventViewModel[]> {
        return Promise.resolve([]);
    }

    getEventsDateOfMonth(month: number): Promise<Date[]> {
        console.log("Fetching dates of month...\n");

        return fetch("/api/getEventsDateOfMonth", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({month})
        })
        .then(response => response.json())
        .then(data => (data as Array<string>).map(x => new Date(x)));
    }

    getEventsOfSpan(dateMin: Date, dateMax: Date): Promise<IEventViewModel[]> {
        console.log("Fetching events between dates...\n");

        return fetch("/api/GetEventsOfSpan", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dateMin,
                dateMax
            })
        })
        .then(response => response.json())
        .then(data => data as IEventViewModel[]);
    }

    getThreeFirstEvents(): Promise<IEventViewModel[]> {
        console.log("Fetching first three events...\n");

        return fetch("/api/GetThreeFirstEvents", {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => data as IEventViewModel[]);
    }
}