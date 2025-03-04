/**
 * Calendar API mock for testing.
*/

import type { IEventViewModel } from "../viewmodels/IEventViewModel";
import type { ICalendarAPI } from "./ICalendarAPI";

export class MockCalendar implements ICalendarAPI {
    private static instance: MockCalendar;

    private constructor() { }

    static getInstance(): MockCalendar {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new MockCalendar();
            return this.instance;
        }
    }

    getEventsAhead(): IEventViewModel[] {
        const events: IEventViewModel[] = [
            {
                id: "gjaiotjmg-falsf",
                title: "Workshop",
                description: "BLABLABLABLALBLABLALBLAB",
                startTime: "20:30",
                endTime: "23:00",
                startDate: {
                    day: 5,
                    month: "March",
                    monthCut: "Mar",
                    year: 2025
                },
                endDate: {
                    day: 5,
                    month: "March",
                    monthCut: "Mar",
                    year: 2025
                }
            }
        ];

        return events;
    }
}