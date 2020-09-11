import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-groups',
  templateUrl: './student-groups.component.html',
  styleUrls: ['./student-groups.component.scss'],
})
export class StudentGroupsComponent implements OnInit {

  constructor() { }

  Allinfo:boolean
  GroupInfo:boolean
  ngOnInit() {
    this.Allinfo=false;
    this.GroupInfo=true
  }

  ShowFiles()
  {
    this.Allinfo=true;
  }
  
}
