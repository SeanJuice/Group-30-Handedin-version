import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  constructor(private Route:Router) { }

  ngOnInit() {}
  Show()
  {}

  Home()
  {
    this.Route.navigate["administrator"]
  }

}
