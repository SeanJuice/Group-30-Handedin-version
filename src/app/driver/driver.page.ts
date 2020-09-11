import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthServiceService } from '../login/core/auth-service.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.page.html',
  styleUrls: ['./driver.page.scss'],
})
export class DriverPage implements OnInit {

  constructor(private router: Router,private activatedRoute:ActivatedRoute,private firestore: AngularFirestore,private logout:AuthServiceService) { }
  ApplicantOrDriver = false;
  ngOnInit() {
    if(localStorage.getItem("key") =="showHome")
    {
      this.router.navigate(["driver/Home"])
      localStorage.removeItem("key");
    }

    const id = localStorage.getItem("UmuntuId")
    this.firestore.doc(`Users/${id}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
   
      if(item.AccessRoleID == "Applicant")
      {
          this.ApplicantOrDriver=true;
      }

    })
  }

  LogOut(){
    
     this.router.navigate(["/login"], {relativeTo: this.activatedRoute})
     
     localStorage.clear();
    this.logout.logout()
  }
  

}
