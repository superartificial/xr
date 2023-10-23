import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalendarEvent } from 'src/app/model/event.model';
import { WordpressService } from 'src/app/wordpress/wordpress.service';


@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent {
  constructor(
    public wpService: WordpressService,    
    public dialogRef: MatDialogRef<EventViewComponent>,
    @Inject(MAT_DIALOG_DATA) public event: CalendarEvent) {}

    public formatEventDateRange(event: CalendarEvent): string {
      return WordpressService.formatEventDateRange(event);
    }

    public close() {
      this.dialogRef.close();
    }

}
