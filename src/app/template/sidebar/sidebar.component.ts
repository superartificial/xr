import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { MenuItem, MenuService } from '../menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Output() closeSidenav = new EventEmitter<void>();  
  menu: MenuItem[];  

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.closeSidenav.emit();  
  }

  constructor(
    private menuService: MenuService
    ) { }

    ngOnInit() {
      this.menu =  this.menuService.menuItemsHeader;
    }
  
    onClose() {
      this.closeSidenav.emit();  
    }    

}
