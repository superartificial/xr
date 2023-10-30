import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { WordpressService } from 'src/app/wordpress/wordpress.service';
import { Page } from '../../model/page.model';
import { Params, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { first, filter } from 'rxjs/operators';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();   
  page: Page;  
  embedded: boolean = false;
  @Input('slug')slug: string; 

  constructor(
    public wpService: WordpressService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit() {

    if(this.slug==null) {
      this.subscriptions.add(this.route.params.pipe(first()).subscribe((params: Params) => {
        let slug = params['slug'];
        this.loadPageContent(slug);
      }));
  
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
        this.route.params.pipe(first()).subscribe((params: Params) => {
          let slug = params['slug'];
          this.loadPageContent(slug);
          
        })
      });      
    } else {
      this.embedded = true;
      this.loadPageContent(this.slug);
    }

  }

  private loadPageContent(slug: string) {
    this.wpService.getPage(slug).subscribe((result) => {
      this.page = result[0];
      // console.log(this.page);
    });
  }

  /*
  * Strip out additional paragraph tag added by WP
  */
  public getPageContent() {
    let content:string = (this.page?.content!=null)?this.page.content.rendered:'';  
    if(content.indexOf('<p>')==0) {
      content = content.substring(3);
      if(content.lastIndexOf('</p>')==content.length-5) {
        content = content.substring(0,content.length-5);
      }
    }  
    // console.log('content',content, content.lastIndexOf('</p>'), content.length)
    return content;    
  }

  ngOnDestroy() {    
    this.subscriptions.unsubscribe();
  }
  
}
