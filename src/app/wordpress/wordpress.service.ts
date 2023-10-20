import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post.model';
import { Page } from '../model/page.model';
import { NewsItem } from '../model/news-item.model';
import { CalendarEvent, EventResponseData } from '../model/event.model';
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class WordpressService {

    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    constructor( private http: HttpClient ) {

    }

    getPosts() {
        // return [...this.posts];
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
        let url = `${environment["api-endpoint"]}tribe/events/v1/events`;
        if(futureOnly) { url += '?start_date=now' }
        return this.http.get<EventResponseData>(url);        
      }

      getPage(id: string): Observable<Page> {
        // return [...this.posts];
        // don't need to unsubscribe as for build in observables this is handled by angular
        return this.http.get<Page[]>(`${environment["api-endpoint"]}wp/v2/pages?slug=${ id }`);
      }  
      
      getNewsItem(id: string): Observable<Page> {
        // return [...this.posts];
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
      public static removeSrcsetAttributeFromImages(htmlContent: string): string {
        // Create a temporary element to parse the HTML content
        const tempElement = document.createElement('div');
        tempElement.innerHTML = htmlContent;
      
        // Find all img elements within the temporary element
        const imgElements = tempElement.querySelectorAll('img');
      
        // Loop through each img element and remove the srcset attribute
        imgElements.forEach((imgElement) => {
          if (imgElement.hasAttribute('srcset')) {
            imgElement.removeAttribute('srcset');
          }
        });
      
        // Get the modified HTML content
        const modifiedHtmlContent = tempElement.innerHTML;
      
        return modifiedHtmlContent;
      }


}