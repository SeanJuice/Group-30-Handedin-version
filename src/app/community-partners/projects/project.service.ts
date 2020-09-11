import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { AngularFirestore } from '@angular/fire/firestore';
import { Projects } from '../projects/projects.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: AngularFireList<any>;   
  projectNamePattern = "^([A-z0-9À-ž\s]){2,}$";
  contactPersonPattern = "^([A-z0-9À-ž\s]){2,}$";
  physicalAddressPattern = "^([A-z0-9À-ž\s]){2,}$";
  categoryPattern = "^([A-z0-9À-ž\s]){2,}$";
  descriptionPattern = "^([A-z0-9À-ž\s]){2,}$";

  form =  this.fb.group({
    Name: ['',[Validators.required,Validators.pattern(this.projectNamePattern)]],
    ProjectYear: ['',[Validators.required,Validators.pattern(this.projectNamePattern)]],
    ContactPerson: ['',[Validators.required,Validators.pattern(this.contactPersonPattern)]],
    PhysicalAddress: ['',[Validators.required,Validators.pattern(this.physicalAddressPattern)]],
    Category: ['',[Validators.required]],
    Description: ['',[Validators.required,Validators.pattern(this.descriptionPattern)]],
    CommunityPartnerID: ['',[Validators.required,Validators.pattern(this.descriptionPattern)]],
    Status: ['',[Validators.required,Validators.pattern(this.descriptionPattern)]],
  })
  //constructor 
  constructor(private firestore: AngularFirestore,public fb: FormBuilder,private db: AngularFireDatabase) { }


  //Add
  AddProject(data, id:string) {
    data.Status="Pending";
    data.CommunityPartnerID=id;
    data.ProjectYear="2020";

        this.firestore
            .collection("Projects")
            .add(data);

              
 
  }
  //Delete the record 
  Delete(item) {
    this.firestore.doc(`Projects/${item.id}`).delete()
  }
  //Updating the admin
  updateProject(data,id){
    
    this.firestore.doc(`Projects/${id}`).update(data);
    
  }
}
