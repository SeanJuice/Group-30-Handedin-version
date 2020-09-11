import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-c-news-feed',
  templateUrl: './c-news-feed.component.html',
  styleUrls: ['./c-news-feed.component.scss'],
})
export class CNewsFeedComponent implements OnInit {

  constructor() { }
isSmall:boolean
isBig:boolean

  ngOnInit() {
    this.isBig=false;
    this.isSmall=false
  }
  @HostListener('window:resize',['$event'])
  
   onResize(event){
      event.target.innerWidth
      if( event.target.innerWidth<= 576)
      {
        this.isSmall = true;
        this.isBig =false;
        console.log(this.isSmall)
      }
      else
      {
        this.isBig = true
        this.isSmall = false;
      }
      
    }
  
}
 