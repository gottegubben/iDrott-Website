/**
 * Interface for a calendar API object.
*/

import type { IEventViewModel } from "../viewmodels/IEventViewModel";

export interface ICalendarAPI {
    getEventsAhead(): Promise<IEventViewModel[]>; // Retrieves the events that are ahead (max 10 I think).

    getEventsDateOfMonth(month: number): Promise<Date[]>; // Retrieves the events for a month (only their dates).

    getEventsOfSpan(dateMin: Date, dateMax: Date): Promise<IEventViewModel[]>; // Retrieves the events between a certain time span.

    getThreeFirstEvents(): Promise<IEventViewModel[]>; // Retrieves the first 3 events coming up.
}