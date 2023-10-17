import { Component } from '@angular/core';
import { MenuService, MenuItem } from '../menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public menuService: MenuService,
    private router: Router
    ) { }

}
