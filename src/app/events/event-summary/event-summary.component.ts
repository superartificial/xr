import { Component, Input } from '@angular/core';
import { CalendarEvent } from 'src/app/model/event.model';
import { WordpressService } from 'src/app/wordpress/wordpress.service';
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-event-summary',
  templateUrl: './event-summary.component.html',
  styleUrls: ['./event-summary.component.scss']
})
export class EventSummaryComponent {

  @Input('event')event: CalendarEvent;

  constructor(
    public wpService: WordpressService,
    private router: Router,
    private route: ActivatedRoute
  ) { }    

  /*
  * Show one date and start / end time if single day, otherwise include both dates
  */ 
  public formatCalendarEvent(event: CalendarEvent): string {
    const startDate = new Date(event.start_date);
    const endDate = new Date(event.end_date);
    const isSameDate = startDate.toDateString() === endDate.toDateString();
  
    if (isSameDate) {
      const formattedStartDate = formatDate(startDate, 'MMMM d, h:mm a', 'en-US');
      const formattedEndDate = formatDate(endDate, 'h:mm a', 'en-US');
      return `${formattedStartDate} - ${formattedEndDate}`;
    } else {
      const formattedStart = formatDate(startDate, 'MMMM d, h:mm a', 'en-US');
      const formattedEnd = formatDate(endDate, 'MMMM d, h:mm a', 'en-US');
      return `${formattedStart} - ${formattedEnd}`;
    }
  }

}
