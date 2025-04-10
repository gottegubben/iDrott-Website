export interface IEventViewModel {
    id: string,
    title: string,
    description: string,
    startTime: string,
    endTime: string,
    startDate: {
        day: number,
        weekDay: string,
        monthNumber: number,
        month: string,
        monthCut: string,
        year: number
    },
    endDate: {
        day: number,
        weekDay: string,
        month: string,
        monthNumber: number,
        monthCut: string,
        year: number
    }
};