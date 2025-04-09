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
                    monthNumber: 5,
                    monthCut: "Mar",
                    year: 2025
                },
                endDate: {
                    day: 5,
                    weekDay: "Monday",
                    month: "March",
                    monthNumber: 5,
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
                    monthNumber: 5,
                    monthCut: "Mar",
                    year: 2025
                },
                endDate: {
                    day: 7,
                    weekDay: "Wednesday",
                    month: "March",
                    monthNumber: 5,
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
                    monthNumber: 5,
                    monthCut: "Mar",
                    year: 2025
                },
                endDate: {
                    day: 10,
                    weekDay: "Saturday",
                    month: "March",
                    monthNumber: 5,
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
                    monthNumber: 5,
                    monthCut: "Mar",
                    year: 2025
                },
                endDate: {
                    day: 5,
                    weekDay: "",
                    month: "March",
                    monthNumber: 5,
                    monthCut: "Mar",
                    year: 2025
                }
            }
        ];

        return events;
    }

    getEventsDateOfMonth(month: number): Date[] {
        if (0 < month && month > 11) return [];
        
        if (month == 3) { // If month == April.
            return [
                new Date(2025, 3, 1),
                new Date(2025, 3, 10),
                new Date(2025, 3, 12),
                new Date(2025, 3, 16),
                new Date(2025, 3, 21),
                new Date(2025, 3, 25),
                new Date(2025, 3, 29)
            ];
        }
        else if (month == 4) { // If month == May.
            return [
                new Date(2025, 4, 1),
                new Date(2025, 4, 3),
                new Date(2025, 4, 5),
                new Date(2025, 4, 10),
                new Date(2025, 4, 25),
                new Date(2025, 4, 26),
                new Date(2025, 4, 29)
            ];
        }

        return [];
    }

    getEventsOfSpan(dateMin: Date, dateMax: Date): IEventViewModel[] {
        const dates = [
            {
                id: "gjaiotjmg-falsf",
                title: "Workshop",
                description: "Enjoy a day of workshop activities, community and relaxation!",
                startTime: "20:30",
                endTime: "23:00",
                startDate: {
                    day: 5,
                    weekDay: "Monday",
                    month: "April",
                    monthNumber: 3,
                    monthCut: "Apr",
                    year: 2025
                },
                endDate: {
                    day: 5,
                    weekDay: "Monday",
                    month: "April",
                    monthNumber: 3,
                    monthCut: "Apr",
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
                    monthNumber: 2,
                    monthCut: "Mar",
                    year: 2025
                },
                endDate: {
                    day: 7,
                    weekDay: "Wednesday",
                    month: "March",
                    monthNumber: 2,
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
                    monthNumber: 2,
                    monthCut: "Mar",
                    year: 2025
                },
                endDate: {
                    day: 10,
                    weekDay: "Saturday",
                    month: "March",
                    monthNumber: 2,
                    monthCut: "Mar",
                    year: 2025
                }
            }
        ];

        const events = dates.filter(x => {
            return dateMin.getFullYear() <= x.startDate.year && x.startDate.year <= dateMax.getFullYear() &&
                dateMin.getMonth() <= x.startDate.monthNumber && x.startDate.monthNumber <= dateMax.getMonth() &&
                dateMin.getDate() <= x.startDate.day && x.startDate.day <= dateMax.getDate();
        });

        return events;
    }

    getThreeFirstEvents(): IEventViewModel[] {
        return [
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
                    monthNumber: 5,
                    monthCut: "Mar",
                    year: 2025
                },
                endDate: {
                    day: 5,
                    weekDay: "Monday",
                    month: "March",
                    monthNumber: 5,
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
                    monthNumber: 5,
                    monthCut: "Mar",
                    year: 2025
                },
                endDate: {
                    day: 7,
                    weekDay: "Wednesday",
                    month: "March",
                    monthNumber: 5,
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
                    monthNumber: 5,
                    monthCut: "Mar",
                    year: 2025
                },
                endDate: {
                    day: 10,
                    weekDay: "Saturday",
                    month: "March",
                    monthNumber: 5,
                    monthCut: "Mar",
                    year: 2025
                }
            }
        ];
    }
}