import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {

  isBig:boolean
  constructor() { 
    this.isBig=false
  }

  ngOnInit() {}

}
