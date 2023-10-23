export interface CalendarEvent {
    id?:  string;
    title?: { rendered: string };
    content?: { rendered: string; protected: boolean };
    start_date?: Date;
    end_date?: Date;
    all_day?: boolean;
    description?: string;
    organizer?: [ { organizer: string; phone: string; email: string;  } ];
    categories?: [ { name?: string; slug?: string } ];
    venue: Venue;
    [key: string]: any;
}

export interface Venue {
    url?: string;
    venue?: string;
    address?: string;
    city?:string;    
}

export interface EventResponseData {
    events: CalendarEvent[],
    rest_url: string,
    next_rest_url: string,
    total: number,
    total_pages: number,
    length: number
}