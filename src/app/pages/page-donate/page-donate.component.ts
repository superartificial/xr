import { Component, OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Page } from 'src/app/model/page.model';
import { WordpressService } from 'src/app/wordpress/wordpress.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-donate',
  templateUrl: './page-donate.component.html',
  styleUrls: ['./page-donate.component.scss']
})
export class PageDonateComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();   
  page: Page;  
  donateWPSlug: string = "donate-2";


  constructor(
    private readonly elementRef: ElementRef,
    private renderer: Renderer2,
    public wpService: WordpressService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {    
      this.loadPageContent(this.donateWPSlug);

      const script = this.renderer.createElement('script');
      script.src = 'https://actionnetwork.org/widgets/v4/fundraising/extinctionrebellionnz-donate?format=js&source=widget&referrer=[object Object]';
      script.onload = () => {
        console.log('script loaded');    
      };
      this.renderer.appendChild(this.elementRef.nativeElement, script);
      
  }  

  private loadPageContent(slug: string) {
    this.wpService.getPage(slug).subscribe((result) => {
      this.page = result;
      console.log(this.page);
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
    console.log('content',content, content.lastIndexOf('</p>'), content.length)
    return content;    
  }  

  ngOnDestroy() {    
    this.subscriptions.unsubscribe();
  }  

}
