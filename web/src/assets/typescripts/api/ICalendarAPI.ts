/**
 * Interface for a calendar API object.
*/

import type { IEventViewModel } from "../viewmodels/IEventViewModel";

export interface ICalendarAPI {
    getEventsAhead(): IEventViewModel[]; // Retrieves the events that are ahead.
}