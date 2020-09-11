import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class JcptoolsService {

  constructor(private fb:FormBuilder,private firestore: AngularFirestore) { }
 form = this.fb.group({  
    RequestDate: ['', [Validators.required]],
    ReturnDate: ['', [Validators.required]],
  }, {validator: this.dateLessThan('RequestDate', 'ReturnDate')});


  dateLessThan(from: string, to: string) {
      return (group: FormGroup): {[key: string]: any} => {
        let f = group.controls[from];
        let t = group.controls[to];
        if (f.value > t.value) {
          return {
            dates: "Date from should be less than Date to"
          };
        }
        return {};
      }
    }
    
    
    AddDates(Studentid,Toolid,data)
    {
      let isReqested= false

      this.firestore.collection("Tools").snapshotChanges().subscribe(items => {
      
        items.forEach(a => {
          let item: any = a.payload.doc.data()
          item.id = a.payload.doc.id;
          if(item.ToolStatusID== "Requested")
          {
            if(item.RequestInfo.StudentId==Studentid)
                isReqested= true;
                   
          }
    
        })
      })
      if(isReqested)
      {
        window.alert('Cannot Request more than one tool.');
      }
      else{
        this.firestore.collection('Tools').doc(Toolid).update({
          ToolStatusID: "Requested",
          RequestInfo:{
            RequestDate: data.RequestDate,
            ReturnDate: data.ReturnDate,
            StudentId:Studentid
          }
        })
      }
      
      console.log("done")

    }
    
    
}
