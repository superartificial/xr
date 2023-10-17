import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordpressService } from './wordpress/wordpress.service';
import { Post } from './model/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postsSub: Subscription;  

  constructor(public wpService: WordpressService) {}

  ngOnInit() {
    this.wpService.getPosts();
    this.postsSub = this.wpService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
        console.log('posts: ', this.posts)
      });
  }

  ngOnDestroy() {
    // this.postsSub.unsubscribe();
  }

}
