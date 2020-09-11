import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private fb:FormBuilder,
    private firestore: AngularFirestore
    ) { }
     
  NamePattern = "^([A-z0-9À-ž\s]){2,}$";
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  NumbePattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  Projects= []
  form =  this.fb.group({
    ProjectYear:  ['',[Validators.required,Validators.pattern(this.NumbePattern)]],
    CommunityPratnerID:  ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    Category: ['',[Validators.required,Validators.pattern(this.emailPattern)]],
    ContactNumber: ['',[Validators.required,Validators.pattern(this.NumbePattern)]],
    Status: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    Name: ['',[Validators.required]],
    Description: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    ContactPerson: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    PhysicalAddress: ['', [Validators.required,Validators.pattern(this.pwdPattern)]],
  })

    TemporarilyChosenProject( ProjectId: string , GroupNumber: number)
    {

      let isAssigned = false
      this.firestore.collection("Projects").snapshotChanges().subscribe(items => {
        
        items.forEach(a => {
          let item: any = a.payload.doc.data()
          item.id = a.payload.doc.id;
          console.log(item.ChosenByGroup)
          console.log(GroupNumber)
          if(item.ChosenByGroup === GroupNumber)
          {
            console.log(item)
            isAssigned==true
          }

        })
      })
      
            if(isAssigned==false)
            {
              this.firestore.doc(`Projects/${ProjectId}`).update({
                Status: 'TemporarilyChosen',
                ChosenByGroup: GroupNumber,
            })
          }
          else{
            window.alert('Cannot Take more than One project.');
          }
    }
}

