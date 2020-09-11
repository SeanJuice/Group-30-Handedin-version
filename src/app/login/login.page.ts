import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthServiceService } from './core/auth-service.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,private AfAuth:AngularFireAuth, private authServ: AuthServiceService,private firestore:AngularFirestore) { }
;
  imageUrl:any;
  GetAdmin:any;
  error: string
  ngOnInit() {
    this.imageUrl =".,"
    localStorage.setItem('key', 'showHome');
    
  }
  checkVerified(res)
  {
    if(res.user.emailVerified ==false)
    {
      window.alert('Please validate your email address. Kindly check your inbox.');
    }
  }
  onSubmit(email:string, password: string){
    
    console.log("here: ",email)
    ///ch false gomo2324
        this.AfAuth.signInWithEmailAndPassword(email,password).then(res=>{
          const uid =res.user.uid;
          console.log("you have entered")

                this.firestore.collection("Users").snapshotChanges().subscribe(items=>{
                  items.forEach(a=>{
                    let item:any = a.payload.doc.data()
                    item.id = a.payload.doc.id;
                    
                    if(item.id === uid && item.UserTypeID == "Driver")
                    {
                      localStorage.setItem('UmuntuId', uid);
                      this.checkVerified(res)
                      this.router.navigate(['./driver'])
                    }
                    else if(item.id === uid && item.UserTypeID == "student")
                    {
                      localStorage.setItem('UmuntuId', uid);
                      this.checkVerified(res)
                      this.router.navigate(['./students']) 
                    }
                    else if(item.id === uid && item.UserTypeID == "CommunityPartner")
                    {
                      localStorage.setItem('UmuntuId', uid);
                      this.checkVerified(res)
                      this.router.navigate(['./community-partners']) 
                    }
                    else if(item.id === uid && item.UserTypeID == "administrator")
                    {
                      localStorage.setItem('UmuntuId', uid);
                      this.checkVerified(res)
                      this.router.navigate(['./administrator']) 
                    }
                    
                  })
                })

        }).catch(err => {
          console.log('Something is wrong:',err.message);
          window.alert('Please check if your password/email are correct.');
          });
       
        //form.reset();
      }
   
  }





