export interface IEventViewModel {
    id: string,
    title: string,
    description: string,
    startTime: string,
    endTime: string,
    startDate: {
        day: number,
        month: string,
        monthCut: string,
        year: number
    },
    endDate: {
        day: number,
        month: string,
        monthCut: string,
        year: number
    }
};