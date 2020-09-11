import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, Validators } from '@angular/forms';
import { Tool } from '../models/tool.model';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  NamePattern = "^([A-z0-9À-ž\s]){2,}$"
  NumbePattern = "^((\\+91-?)|0)?[0-9]{10}$";

  form = this.fb.group({
    CatergoryID: ['', [Validators.required]],
    ToolStatusID: ['', [Validators.required,]],
    ConditionID: ['', [Validators.required,]],
    ToolName: ['', [Validators.required, ]],
    ToolDateAdded: ['', [Validators.required,]],
    ToolDescription: ['', [Validators.required]],
  })

  ConditonForm = this.fb.group({  
    Condition: ['', [Validators.required, Validators.pattern(this.NamePattern)]],
    Comment: ['', [Validators.required, Validators.pattern(this.NamePattern)]],
  })

  constructor(private firestore: AngularFirestore, public fb: FormBuilder, private db: AngularFireDatabase) {

  }
  addNewTool(data: Tool,id) {
    data.ToolDateAdded = Date.now()
    data.ToolStatusID = "Available"

    this.firestore.collection(`Tools`).doc(id).set(data)
  }

  updateTool(data, id) {
    this.firestore.doc(`Tools/${id}`).update(data);
  }

  delete(id) {
    this.firestore.doc(`Tools/${id}`).delete();
  }

  AddContion(data,isAddCheck:boolean,id:string)
  {
    this.firestore.collection('ToolConditions').doc(id).set(data);
  /*  if (isAddCheck==true)
    {
      
    }
    else
    {
      this.firestore.doc(`ToolConditions/${id}`).update(data);
    }
*/
  }

}
