import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthServiceService } from '../login/core/auth-service.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  constructor( private ModalCtrl:ModalController,private router:Router,public navCtrl: NavController,
    private activatedRoute:ActivatedRoute,private firestore: AngularFirestore,private logout:AuthServiceService) {
    
  }

   ngOnInit() {

   }
   LogOut(){
    
    this.router.navigate(["/login"], {relativeTo: this.activatedRoute})
    
    localStorage.clear();
   this.logout.logout()
 }
}
