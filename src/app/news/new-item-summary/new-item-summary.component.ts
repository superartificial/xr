import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post.model';
import { WordpressService } from 'src/app/wordpress/wordpress.service';

@Component({
  selector: 'app-new-item-summary',
  templateUrl: './new-item-summary.component.html',
  styleUrls: ['./new-item-summary.component.scss']
})
export class NewItemSummaryComponent {

  @Input('newsItem')newsItem: Post;

  constructor(
    public wpService: WordpressService,
    private router: Router,
    private route: ActivatedRoute
  ) { }  
  
  public loadNewsItem() {
    this.router.navigate([ '/news/', this.newsItem.slug]);
  }

}
