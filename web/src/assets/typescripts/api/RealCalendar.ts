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
        return [];
    }

    getEventsOfSpan(dateMin: Date, dateMax: Date): IEventViewModel[] {
        return [];
    }

    getThreeFirstEvents(): IEventViewModel[] {
        return [];
    }
}