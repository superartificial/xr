import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from 'src/app/model/post.model';
import { WordpressService } from 'src/app/wordpress/wordpress.service';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();   

  newsItem: Post;

    constructor(
      public wpService: WordpressService,
      private router: Router,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.subscriptions.add(this.route.params.pipe(first()).subscribe((params: Params) => {
      let slug = params['slug'];
      this.loadNewsItem(slug);
    }));    

    this.subscriptions.add(this.route.params.pipe(first()).subscribe((params: Params) => {
      let slug = params['slug'];
      this.loadNewsItem(slug);
    }));  
  }

  public loadNewsItem(slug: string) {
    this.wpService.getNewsItem(slug).subscribe((result) => {
      this.newsItem = result[0];
      this.newsItem.content.rendered = WordpressService.removeAttributesFromElement(this.newsItem.content.rendered,'img',['srcset','width','height']);
      console.log(this.newsItem);
    });
  }

  ngOnDestroy() {    
    this.subscriptions.unsubscribe();
  }

}
