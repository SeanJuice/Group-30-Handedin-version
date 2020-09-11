import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectmodal',
  templateUrl: './projectmodal.component.html',
  styleUrls: ['./projectmodal.component.scss'],
})
export class ProjectmodalComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {}
  AddProject(){
    
  }

  cancel()
  {
    this.router.navigate(['login/register/cp-application']);
  }

}
