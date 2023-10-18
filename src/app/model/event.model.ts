export interface CalendarEvent {
    id?:  string;
    title?: { rendered: string };
    content?: { rendered: string, protected: boolean };
    [key: string]: any;
}

export interface EventResponseData {
    events: CalendarEvent[],
    rest_url: string,
    next_rest_url: string,
    total: number,
    total_pages: number,
    length: number
}