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
                description: "Enjoy a day of workshop activities, community and relaxation!",
                startTime: "20:30",
                endTime: "23:00",
                startDate: {
                    day: 5,
                    weekDay: "Monday",
                    month: "March",
                    monthCut: "Mar",
                    year: 2025
                },
                endDate: {
                    day: 5,
                    weekDay: "Monday",
                    month: "March",
                    monthCut: "Mar",
                    year: 2025
                }
            },
            {
                id: "fsafaa",
                title: "Tuesday Practice",
                description: "You know what time it is!",
                startTime: "20:15",
                endTime: "22:00",
                startDate: {
                    day: 7,
                    weekDay: "Wednesday",
                    month: "March",
                    monthCut: "Mar",
                    year: 2025
                },
                endDate: {
                    day: 7,
                    weekDay: "Wednesday",
                    month: "March",
                    monthCut: "Mar",
                    year: 2025
                }
            },
            {
                id: "adasdadsg",
                title: "Barbeque",
                description: "Want to get loose and have a good time while eating hot dogs? Join us!",
                startTime: "20:30",
                endTime: "00:00",
                startDate: {
                    day: 10,
                    weekDay: "Saturday",
                    month: "March",
                    monthCut: "Mar",
                    year: 2025
                },
                endDate: {
                    day: 10,
                    weekDay: "Saturday",
                    month: "March",
                    monthCut: "Mar",
                    year: 2025
                }
            },
            {
                id: "adsadf",
                title: "gagsbas",
                description: "",
                startTime: "20:30",
                endTime: "23:00",
                startDate: {
                    day: 5,
                    weekDay: "",
                    month: "March",
                    monthCut: "Mar",
                    year: 2025
                },
                endDate: {
                    day: 5,
                    weekDay: "",
                    month: "March",
                    monthCut: "Mar",
                    year: 2025
                }
            }
        ];

        return events;
    }
}