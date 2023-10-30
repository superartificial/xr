import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/wordpress/wordpress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private wpService: WordpressService){}

  ngOnInit() {
    this.wpService.preloadPages().subscribe();
  }


}
