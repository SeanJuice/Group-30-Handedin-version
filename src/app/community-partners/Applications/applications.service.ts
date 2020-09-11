import { CommunityPartner } from './../models/communitypartner.model';
import {Project} from './../models/projects.model';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  projectNamePattern = "^([A-z0-9À-ž\s]){2,}$";

  form =  this.fb.group({
    ContactNumber: ['',[Validators.required,Validators.pattern(this.projectNamePattern)]],
    ContactPerson: ['',[Validators.required,Validators.pattern(this.projectNamePattern)]],
    Name: ['',[Validators.required,Validators.pattern(this.projectNamePattern)]],
    PhysicalAddress: ['',[Validators.required,Validators.pattern(this.projectNamePattern)]],
    PostalAddress: ['',[Validators.required,Validators.pattern(this.projectNamePattern)]],
    ProjectName: ['',[Validators.required,Validators.pattern(this.projectNamePattern)]],
    ContactPerson1: ['',[Validators.required,Validators.pattern(this.projectNamePattern)]],
    PhysicalAddress1: ['',[Validators.required,Validators.pattern(this.projectNamePattern)]],
    Category: ['',[Validators.required,Validators.pattern(this.projectNamePattern)]],
    Description: ['',[Validators.required,Validators.pattern(this.projectNamePattern)]],
  })

  constructor(private firestore: AngularFirestore,public fb: FormBuilder,private db: AngularFireDatabase) { }

  updateCPDetails(cp:CommunityPartner, project:Project ,id:string){
    
    this.firestore.doc(`CommunityPartners/${id}`).update({
      ContactNumber: cp.contactNumber,
      ContactPerson: cp.contactPerson,
      Name: cp.name,
      PhysicalAddress: cp.physicalAddress,
      PostalAddress: cp.postalAddress,
    });
    this.firestore.doc(`Projects/${id}`).update({
      Name: project.Name,
      ContactPerson1: project.ContactPerson,
      PhysicalAddress1: project.PhysicalAddress,
      Category: project.Category,
      Description: project.Description,
    });
    console.log("success")
    }
}
