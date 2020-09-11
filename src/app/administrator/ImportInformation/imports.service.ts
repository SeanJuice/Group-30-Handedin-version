import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
//xcel
import * as XLSX from 'xlsx';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class ImportsService {

  constructor(private firestore:AngularFirestore,private toastController: ToastController) { }

    ///xcel import
    public importFromFile(bstr: string): XLSX.AOA2SheetOpts {
      /* read workbook */
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
  
      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
  
      /* save data */
      const data = <XLSX.AOA2SheetOpts>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
  
      return data;
    }

    AddStudents(student)
    {
      this.firestore.collection("students2").add(student).then(rr=>{
        this.Success()
      })
    }
    
    async Success() {
      const toast = await this.toastController.create({
        message: 'Students successfully Imported.',
        position:"middle",
        cssClass: "MyToasts",
        duration: 2000 //s2 seconds
      });
      toast.present();
     
    }
//add Presentation
    AddPresentation(proposal)
    {
      this.firestore.collection("PresentationsReporting").add(proposal).then(rr=>{
        this.SuccessPresentation()
      })
    }
      
    async SuccessPresentation() {
      const toast = await this.toastController.create({
        message: 'Presentation Data successfully imported successfully .',
        position:"middle",
        cssClass: "MyToasts",
        duration: 2000 //s2 seconds
      });
      toast.present();
     
    }

    //add Proposal
    AddProposal(proposal)
    {
      this.firestore.collection("ProposalReporting").add(proposal).then(rr=>{
        this.SuccessProposal()
      })
    }
      
    async SuccessProposal() {
      const toast = await this.toastController.create({
        message: 'Proposal Data successfully imported successfully .',
        position:"middle",
        cssClass: "MyToasts",
        duration: 2000 //s2 seconds
      });
      toast.present();
     
    }
}
