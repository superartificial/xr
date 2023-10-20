import { Component, OnInit } from '@angular/core';
import  localGroups  from './local-groups.json';
import { LocalGroup } from '../model/local-group.model.js';

@Component({
  selector: 'app-local-groups',
  templateUrl: './local-groups.component.html',
  styleUrls: ['./local-groups.component.scss']
})
export class LocalGroupsComponent implements OnInit {

  groups: LocalGroup[] = localGroups;

  ngOnInit() {
    
  }

}
