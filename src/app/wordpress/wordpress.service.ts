import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from '../model/post.model';

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

      getPostUpdateListener() {
        return this.postsUpdated.asObservable();
      }      

}