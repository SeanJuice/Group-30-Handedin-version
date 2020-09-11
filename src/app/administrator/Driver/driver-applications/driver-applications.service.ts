import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DriverApplicationsService {

  constructor(private firestore: AngularFirestore) { }
  
  determinant:boolean
  dateofApplication:string;
  checkApplication(ApplicantID:string):any{

    this.firestore.collection("Users").snapshotChanges().subscribe(items=>{
      items.forEach(a=>{
        let Theuser:any = a.payload.doc.data()
        Theuser.id = a.payload.doc.id;
      
        if(Theuser.id ==ApplicantID && Theuser.AccessRoleID =="Applicant")
        {
          
        }
        else{
          
        }
     
      })
  
    })
  //  return Check
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
      AccessRoleID: "Driver"
    });
  }
}

