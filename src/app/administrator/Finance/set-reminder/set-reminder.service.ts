import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ReminderModel } from '../../models/setReminder.model';

@Injectable({
  providedIn: 'root'
})
export class SetReminderService {
  
  NamePattern = "^([A-z0-9À-ž\s]){2,}$";
  NumbePattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private fb:FormBuilder,private firestore:AngularFirestore) { }
  
  form =  this.fb.group({
    Time: ['',[Validators.required]],
    Date: ['',[Validators.required,]],
    Occurrence: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    Email: ['',[Validators.required,Validators.pattern(this.emailPattern)]],
  })


  AddReminders(data:ReminderModel)
  {
    if(data.Occurrence=="Once")
    {
      this.firestore.collection('Reminders').add({
        Time: data.Time,
        Date: data.Date,
        Occurrence: data.Occurrence,
        Email: data.Occurrence
      })
    
    }
    else if(data.Occurrence=="Daily")
    {
      this.firestore.collection('Reminders').add({
        Time: data.Time,
        Date: data.Date,
        Occurrence: data.Occurrence,
        Email: data.Occurrence,
        NextReportDate: new Date(Date.now() + 24 * 60 * 60 * 1000)
      })
    }
    else if(data.Occurrence=="Weekly")
    {
      this.firestore.collection('Reminders').add({
        Time: data.Time,
        Date: data.Date,
        Occurrence: data.Occurrence,
        Email: data.Occurrence,
        NextReportDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      })
    }
     
  }
}
