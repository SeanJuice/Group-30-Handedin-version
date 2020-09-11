import { Project } from './../models/Project.model';
import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommunityPartnerService {

  constructor(private fb:FormBuilder,private firestore: AngularFirestore) { }
  Administrators: AngularFireList<any>;   
  NamePattern = "^([A-z0-9À-ž\s]){2,}$";
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  NumbePattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  Projects= []
  form =  this.fb.group({
    ProjectYear:  ['',[Validators.required,Validators.pattern(this.NumbePattern)]],
    CommunityPratnerID:  ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    Category: ['',[Validators.required]],
    ContactNumber: ['',[Validators.required]],
    Status: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    Name: ['',[Validators.required]],
    Description: ['',[Validators.required]],
    ContactPerson: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    PhysicalAddress: ['', [Validators.required,Validators.pattern(this.NamePattern)]],
  })

  AddProject(project:Project)
  {
   this.firestore.collection("Projects").add(project)
  }
  RemoveProject(id){
    this.firestore.doc(`Projects/${id}`).delete()
  }

  AcceptProject(id,newStatus)
  {
    if(newStatus == "Available")
    {
      this.firestore.collection("Projects").doc(id).update({
        Status:newStatus
      })
    }
    else{
      //send email to CP
      this.firestore.collection("Projects").doc(id).update({
        Status:newStatus
      })
    }
    

  }

  
  Delete(id) {
    //Deletes the ComunityPartner
    this.firestore.doc(`CommunityPartners/${id}`).delete()

    this.firestore.collection("Projects").snapshotChanges().subscribe(items=>{
      this.Projects =[];
      items.forEach(a=>{
        let item:any = a.payload.doc.data()
        item.id = a.payload.doc.id;
        if(item.CommunityPratnerID==id)
        {
          this.firestore.doc(`Projects/${id}`).delete()
        }
        else{}
        
      })
      console.log(this.Administrators)
    })
    
  }
  RejectApplication(ApplicantID:string) 
  {
    this.firestore.doc(`Application/${ApplicantID}`).update({
      ApplicaitonStatus: "Rejected"
    });
  }
  AcceptApplicaition(ApplicantID:string) 
  {
    this.firestore.doc(`Application/${ApplicantID}`).update({
      ApplicaitonStatus: "Accepted"
    });
    this.firestore.doc(`Users/${ApplicantID}`).update({
      AccessRoleID: "CommunityPartner"
    });
  }
}
