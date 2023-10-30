import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { of as observableOf, Observable } from 'rxjs';
import { Post } from '../model/post.model';
import { Page } from '../model/page.model';
import { NewsItem } from '../model/news-item.model';
import { CalendarEvent, EventResponseData } from '../model/event.model';
import { map, tap } from "rxjs/operators";
import { environment } from '../../environments/environment';
import { formatDate } from '@angular/common';

@Injectable({providedIn: 'root'})
export class WordpressService {

    private posts: Post[] = [];
    private pages: Page[] = [];
    private postsUpdated = new Subject<Post[]>();

    constructor( private http: HttpClient ) {

    }

    sendContactForm(formData: any): Observable<any>  {
      let url = `${environment["api-endpoint"]}contact-form-7/v1/contact-forms/2101/feedback`;
      return this.http.post<any>(url,formData);  
    }

    getPosts() {
        // don't need to unsubscribe as for build in observables this is handled by angular
        this.http.get<Post[]>(`${environment["api-endpoint"]}wp/v2/posts`)
          .subscribe(
            (postData)=> {
              this.posts = postData;
              this.postsUpdated.next([...this.posts]);
            }
          );
      }

      getEvents(futureOnly: boolean): Observable<EventResponseData> {
        let url = `${environment["api-endpoint"]}tribe/events/v1/events?categories=[public-homepage`;
        if(futureOnly) { url += '&start_date=now' }
        return this.http.get<EventResponseData>(url);        
      }

      getPage(slug: string): Observable<Page> {
        // don't need to unsubscribe as for build in observables this is handled by angular

        let loadedPage = this.pages.filter(page => page['slug']===slug);
        if(loadedPage.length>0) {
          console.log('cached',slug)
          return observableOf(loadedPage[0]);
          
        } else {
          return this.http.get<Page[]>(`${environment["api-endpoint"]}wp/v2/pages?slug=${ slug }`).pipe(
            tap(result => {
              if(result.length>0) {
                this.pages.push(result[0]);
                console.log('PAGES 2:', this.pages)
              }
            }),
            map(
              result => result[0]
            )
          );
        }
      }  

      /*
      / Improve this to take an array of pages to load, or a catergory
      / Also change the check to determine if all required pages are in cached array instead of by length
      */
      preloadPages(): Observable<Page[]> {
        if(this.pages.length<4) {
          return this.http.get<Page[]>(`${environment["api-endpoint"]}wp/v2/pages?slug=get-involved,why-rebel,donate,principles`).pipe(
            tap(result => {
              if(result.length>0) {
                this.pages = this.pages.concat(result);
                console.log('PAGES:', this.pages)
              } else {
                console.log('none')
              }
            })
          );
        } else {
          return observableOf(this.pages);          
        }
      }
      
      getNewsItem(id: string): Observable<Page> {
        // don't need to unsubscribe as for build in observables this is handled by angular
        return this.http.get<Post[]>(`${environment["api-endpoint"]}wp/v2/posts?slug=${ id }`);
      }        

      getNewsList(): Observable<Post[]> {
        return this.http.get<Post[]>(`${environment["api-endpoint"]}wp/v2/posts?category=10&_embed`);
      }

      getPostUpdateListener() {
        return this.postsUpdated.asObservable();
      }      

      /*
      * srcset content is not being returned in full from the WP api, so it needs to be stripped out for the image to load
      * Look into alternatives for image scaling, also this should be moved to a library
      */
      public static removeAttributesFromElement(htmlContent: string, elementName: string, attributes: string[]): string {
        // Create a temporary element to parse the HTML content
        const tempElement = document.createElement('div');
        tempElement.innerHTML = htmlContent;
      
        // Find all img elements within the temporary element
        const imgElements = tempElement.querySelectorAll(elementName);
      
        // Loop through each img element and remove the srcset attribute
        imgElements.forEach((imgElement) => {
          attributes.forEach((attribute)=>{
            if (imgElement.hasAttribute(attribute)) {
              imgElement.removeAttribute(attribute);
            }  
          });
        });
      
        // Get the modified HTML content
        const modifiedHtmlContent = tempElement.innerHTML;
      
        return modifiedHtmlContent;
      }

      /*
      * Show one date and start / end time if single day, otherwise include both dates
      * consider putting this in a library
      */ 
      public static formatEventDateRange(event: CalendarEvent): string {
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