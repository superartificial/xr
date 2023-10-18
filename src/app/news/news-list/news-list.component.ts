import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordpressService } from 'src/app/wordpress/wordpress.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, OnDestroy {

  newsItems: Post[] = [];

    constructor(
      public wpService: WordpressService,
      private router: Router,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.wpService.getNewsList().subscribe((posts: Post[])=> {
      console.log(posts);
      this.newsItems = posts;
    })
  }

  ngOnDestroy() {

  }

}
