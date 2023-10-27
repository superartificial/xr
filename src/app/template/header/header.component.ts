import { Component, Output, EventEmitter } from '@angular/core';
import { MenuService, MenuItem } from '../menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() sidenavToggle = new EventEmitter<void>();  

  constructor(
    public menuService: MenuService,
    private router: Router
    ) { }

  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }    

}
