/**
 * Interface for a calendar API object.
*/

import type { IEventViewModel } from "../viewmodels/IEventViewModel";

export interface ICalendarAPI {
    getEventsAhead(): IEventViewModel[]; // Retrieves the events that are ahead (max 10 I think).

    getEventsDateOfMonth(month: number): Date[]; // Retrieves the events for a month (only their dates).

    getEventsOfSpan(dateMin: Date, dateMax: Date): IEventViewModel[]; // Retrieves the events between a certain time span.

    getThreeFirstEvents(): IEventViewModel[]; // Retrieves the first 3 events coming up.
}