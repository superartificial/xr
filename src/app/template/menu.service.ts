import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface MenuItem {
    Name: string,
    Path: string[],
    Class?: string
}

@Injectable({
    providedIn: 'root'
  })
  export class MenuService {

    readonly menuItemsHeader: MenuItem[] = [
        { Name: 'What is XR?', Path: [ 'page','whatis' ] },
        { Name: 'Events', Path: [ 'events' ] },

    ];

  }