import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface MenuItem {
    Name: string,
    Path: string[],
    Class?: string
}

export interface MenuGroup {
    Name: string,
    Menu: MenuItem[]
}

@Injectable({
    providedIn: 'root'
  })
  export class MenuService {

    readonly menuItemsHeader: MenuItem[] = [
        { Name: 'What is XR?', Path: [ 'pages','what-is-xr' ] },
        { Name: 'Why Rebel?', Path: [ 'pages','why-rebel' ] },
        { Name: 'Get Involved', Path: [ 'get-involved' ] },
        { Name: 'Events', Path: [ 'events' ] },
        { Name: 'News', Path: [ 'news' ] },
        { Name: 'Find Your Group', Path: [ 'groups' ] },
        { Name: 'Donate', Path: [ 'donate' ] }
    ];

    readonly menuGroupsFooter: MenuGroup[] = [
        { Name: 'About', Menu: [
            { Name: 'Home', Path: [ '/', ] },
            { Name: 'What Is XR', Path: [ 'pages','what-is-xr' ] },
            { Name: 'Why Rebel', Path: [ 'pages','why-rebel' ] },
            { Name: 'Principles & Demands', Path: [ 'pages','demands' ] },
        ] },
        { Name: 'Act', Menu: [
            { Name: 'Get Involved', Path: [ 'get-involved' ] },
            { Name: 'Upcoming Events', Path: [ 'events' ] },
            { Name: 'Find Your Group', Path: [ 'groups' ] },
            { Name: 'Donate', Path: [ 'donate' ] },
        ] },
        { Name: 'Other', Menu: [
            { Name: 'News', Path: [ 'pages','what-is-xr' ] },
            { Name: 'Global Site', Path: [ 'EXTERNAL','https://rebellion.global/' ] },
        ] },
        { Name: 'Get In Touch', Menu: [
            { Name: 'Email', Path: [ 'EMAIL','kiaora@extinctionrebellion.nz' ] },
            { Name: 'Facebook', Path: [ 'EXTERNAL','https://www.facebook.com/xr.newzealand/' ] },
            { Name: 'Instagram', Path: [ 'EXTERNAL','https://www.instagram.com/xrauckland/' ] },
            { Name: 'Twitter', Path: [ 'EXTERNAL','https://twitter.com/ExtinctionNZ' ] },
        ] },                        
    ]

  }