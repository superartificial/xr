import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarEvent } from 'src/app/model/event.model';
import { WordpressService } from 'src/app/wordpress/wordpress.service';
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { EventViewComponent } from '../event-view/event-view.component';

@Component({
  selector: 'app-event-summary',
  templateUrl: './event-summary.component.html',
  styleUrls: ['./event-summary.component.scss']
})
export class EventSummaryComponent {

  @Input('event')event: CalendarEvent;

  constructor(
    public dialog: MatDialog,    
    public wpService: WordpressService,
    private router: Router,
    private route: ActivatedRoute
  ) { }    

  onOpenView() {
    console.log('dialog should open')
    const dialogRef = this.dialog.open(EventViewComponent, 
      { 
        width: '94%',
        maxWidth: '1400px', 
        height: '94%',
        data: this.event } 
      );
  }  

  public formatEventDateRange(event: CalendarEvent): string {
    return WordpressService.formatEventDateRange(event);
  }

}
