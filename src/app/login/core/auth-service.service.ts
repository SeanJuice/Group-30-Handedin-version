import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router:Router,private AfAuth:AngularFireAuth,private firestore:AngularFirestore) { }
  getDriver:any 
  getAdmin:any
  getCommmunityPartner:any
  getStudent:any
  Check= false;
  logout(){
    this.AfAuth.signOut()
    this.router.navigate([''])
  }

  //checks if community partner
  isDriver (id): boolean 
  {
    this.firestore.collection("Drivers").snapshotChanges().subscribe(items=>{
      
      items.forEach(a=>{
        let item:any = a.payload.doc.data()
        item.id = a.payload.doc.id;
        
        if(item.id ==id){
            this.Check = true
         
        }
        else{
          this.Check = false
        }
    
      })
     
    })
    
    return this.Check
  }
  //checks if community partner
  isCommunityPartner(id) : boolean 
  {
    return false
  }
   //checks if admin
   isAdmin(id): boolean 
   {
  return false
   }
   isStudent(id): boolean 
   {
    this.firestore.collection("students").snapshotChanges().subscribe(items=>{
      
      items.forEach(a=>{
        let item:any = a.payload.doc.data()
        item.id = a.payload.doc.id;
        
        if(item.id ==id){
            this.Check = true
         
        }
        else{
          this.Check = false
        }
    
      })
     
    })
    
    return this.Check
   }

}
