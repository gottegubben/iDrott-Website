import type { ICalendarAPI } from "./ICalendarAPI";
import { MockCalendar } from "./MockCalendar";
import { RealCalendar } from "./RealCalendar";

export class CalendarFactory {
    static getCalendar(useMock: boolean): ICalendarAPI {
        return useMock ? MockCalendar.getInstance() : RealCalendar.getInstance();
    }
}