import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post.model';
import { Page } from '../model/page.model';
import { NewsItem } from '../model/news-item.model';
import { CalendarEvent, EventResponseData } from '../model/event.model';

@Injectable({providedIn: 'root'})
export class WordpressService {

    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    constructor( private http: HttpClient ) {

    }

    getPosts() {
        // return [...this.posts];
        // don't need to unsubscribe as for build in observables this is handled by angular
        this.http.get<Post[]>('https://zmr.kuy.mybluehost.me/stage/wp-json/wp/v2/posts')
          .subscribe(
            (postData)=> {
              this.posts = postData;
              this.postsUpdated.next([...this.posts]);
            }
          );
      }

      getEvents(futureOnly: boolean): Observable<EventResponseData> {
        let url = 'https://zmr.kuy.mybluehost.me/stage/wp-json/tribe/events/v1/events';
        if(futureOnly) { url += '?start_date=now' }
        return this.http.get<EventResponseData>(url);        
      }

      getPage(id: string): Observable<Page> {
        // return [...this.posts];
        // don't need to unsubscribe as for build in observables this is handled by angular
        return this.http.get<Page[]>(`https://zmr.kuy.mybluehost.me/stage/wp-json/wp/v2/pages?slug=${ id }`);
      }      

      getNewsList(): Observable<Post[]> {
        return this.http.get<Post[]>('https://zmr.kuy.mybluehost.me/stage/wp-json/wp/v2/posts?category=10&_embed');
      }

      getPostUpdateListener() {
        return this.postsUpdated.asObservable();
      }      

}