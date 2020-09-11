import { Component, OnInit } from '@angular/core';

//import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { AuthServiceService } from '../login/core/auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-community-partners',
  templateUrl: './community-partners.page.html',
  styleUrls: ['./community-partners.page.scss'],
})
export class CommunityPartnersPage implements OnInit {

  ApplicantOrDriver=false;
  constructor(private router: Router,private activatedRoute:ActivatedRoute,private firestore: AngularFirestore,private logout:AuthServiceService) { }

  ngOnInit() {
    if(localStorage.getItem("key")=="showHome")
    {
      this.router.navigate(["/community-partners/Home"])
      localStorage.removeItem("key")
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
