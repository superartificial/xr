import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordpressService } from 'src/app/wordpress/wordpress.service';
import { CalendarEvent, EventResponseData } from 'src/app/model/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, OnDestroy {

  events: CalendarEvent[] = [];

    constructor(
      public wpService: WordpressService
  ) {}

  ngOnInit() {
    this.wpService.getEvents(true).subscribe((events: EventResponseData)=> {
      console.log(events);
      this.events = events.events;
    })
  }

  ngOnDestroy() {

  }

}
