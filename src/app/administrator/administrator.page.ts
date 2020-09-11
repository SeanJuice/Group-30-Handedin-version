import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../login/core/auth-service.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.page.html',
  styleUrls: ['./administrator.page.scss'],
})
export class AdministratorPage implements OnInit {
  activatedRoute: any;
 checker =true;
  constructor(private route:Router,private logout:AuthServiceService) { }

 
 
   ngOnInit() {
    if(localStorage.getItem("key") =="showHome")
    {
      this.route.navigate(["administrator/Home"])
      localStorage.removeItem("key");
    }

     
   }

   LogOut(){
    
    this.route.navigate(["/login"], {relativeTo: this.activatedRoute})
    
    localStorage.clear();
   this.logout.logout()
 }
 
 
}
