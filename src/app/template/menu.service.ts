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
        { Name: 'Get Involved', Path: [ 'pages','get-involved' ] },
        { Name: 'Events', Path: [ 'events' ] },
        { Name: 'News', Path: [ 'news' ] },
        { Name: 'Find Your Group', Path: [ 'groups' ] },
        { Name: 'Donate', Path: [ 'pages','donate' ] }
    ];

    readonly menuGroupsFooter: MenuGroup[] = [
        { Name: 'About', Menu: [
            { Name: 'Issues', Path: [ 'pages','what-is-xr' ] },
            { Name: 'Demands', Path: [ 'pages','what-is-xr' ] },
            { Name: 'About Us', Path: [ 'pages','what-is-xr' ] },
            { Name: 'Principles & Values', Path: [ 'pages','what-is-xr' ] },
        ] },
        { Name: 'Act', Menu: [
            { Name: 'Join Us', Path: [ 'pages','what-is-xr' ] },
            { Name: 'Donate', Path: [ 'donate' ] },
            { Name: 'Upcoming events', Path: [ 'events' ] },
            { Name: 'Find a local group', Path: [ 'groups' ] },
            { Name: 'Volunteer', Path: [ 'pages','what-is-xr' ] },
        ] },
        { Name: 'Other', Menu: [
            { Name: 'News', Path: [ 'pages','what-is-xr' ] },
            { Name: 'Media Coverage', Path: [ 'pages','what-is-xr' ] },
            { Name: 'Press releases', Path: [ 'pages','what-is-xr' ] },
            { Name: 'Global Site', Path: [ 'pages','what-is-xr' ] },
        ] },
        { Name: 'Get In Touch', Menu: [
            { Name: 'Email', Path: [ 'pages','what-is-xr' ] },
            { Name: 'Facebook', Path: [ 'pages','what-is-xr' ] },
            { Name: 'Twitter', Path: [ 'pages','what-is-xr' ] },
        ] },                        
    ]

  }