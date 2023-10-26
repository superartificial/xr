import { Component } from '@angular/core';
import { WordpressService } from 'src/app/wordpress/wordpress.service';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { first, filter } from 'rxjs/operators';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent {

  slug: string;

  constructor(
    public wpService: WordpressService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit() {

      this.route.params.pipe(first()).subscribe((params: Params) => {
        this.slug = params['slug'];
      });
  
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
        this.route.params.pipe(first()).subscribe((params: Params) => {
          this.slug = params['slug'];          
        })
      });      

  }

}
