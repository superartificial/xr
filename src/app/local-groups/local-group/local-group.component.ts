import { Component, Input, OnInit } from '@angular/core';
import { LocalGroup } from 'src/app/model/local-group.model';

@Component({
  selector: 'app-local-group',
  templateUrl: './local-group.component.html',
  styleUrls: ['./local-group.component.scss']
})
export class LocalGroupComponent implements OnInit {

  @Input('group')group: LocalGroup;  

  ngOnInit() {
   // console.log(this.group) 
  }  

  public getImageURL(): string {
    return `assets/images/local-groups/${this.group.ImageURL}`;
  }

  public getLocationName() {
    if(this.group.LocationEng==null || this.group.LocationEng=='') {
      return this.group.LocationTeReo;
    } else if (this.group.LocationTeReo==null || this.group.LocationTeReo=='') {
      return this.group.LocationEng;
    } else {
      return `${this.group.LocationTeReo} / ${this.group.LocationEng}`;
    }
  }

  public openExternal(url) {
    if(url.indexOf('mailto')==0) {
      location.href = url;
    } else {
      window.open(url,'_blank');
    }
  }

}
