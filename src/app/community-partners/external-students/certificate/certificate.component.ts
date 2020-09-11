import { Component, OnInit, Input } from '@angular/core';
import { ToastController, ModalController, AlertController } from '@ionic/angular';
import { ExStudentService } from './../exStudent.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Administrator } from 'src/app/administrator/models/Administrator.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import html2pdf from 'html2pdf.js'

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent implements OnInit {
 @Input() id:string
  date= Date.now();
  constructor(private firestore: AngularFirestore,
    private db:AngularFireDatabase,public exStudentService:ExStudentService,
    private toastController:ToastController,
    private Modal:ModalController) { }
    
  exStudent:AngularFireObject<any>
  exStudents:any

  ngOnInit() {
    this.firestore.doc(`External Students/${this.id}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
      console.log(item)
      this.exStudents = item
     //this.adminSev.form.setValue(item)
    })
  }

  download()
  {
    const options = {
      margin: [0.5,0.5],
      filename: 'DriverInfringement.pdf',
      image:{type: 'jpeg',quality:'0.98'},
      html2canvas:{ },
      jsPDF:{orientation:'landscape',format: 'a3'}
    };
      //console.log("here1")
    const content: Element = document.getElementById('content');
    console.log("heree",content)
      //console.log(options)
    html2pdf().from(content).set(options).save();
  }



}
