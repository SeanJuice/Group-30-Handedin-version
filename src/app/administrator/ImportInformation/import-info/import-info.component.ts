import { AlertController } from '@ionic/angular';
import { Proposal } from './../../models/Proposal.model';
import { Presentation } from './../../models/Presentation.model';
import { Student } from './../../models/Student.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ImportsService } from '../imports.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-import-info',
  templateUrl: './import-info.component.html',
  styleUrls: ['./import-info.component.scss'],
})
export class ImportInfoComponent implements OnInit {
  importContacts: Student[] = [];
  importPresentation: Presentation[] = [];
  importProposal: Proposal[] = [];
  docs = {}
  public show:boolean = false;

  public show2:boolean = false;
  public show3:boolean = false;

  constructor(private ImportServ:ImportsService,private alertcontroler:AlertController) { }

  ngOnInit() {

  }
  //Project proposal import
  
 // Student groups import 
     onFileChangeStudent(evt: any) {
      const target: DataTransfer = <DataTransfer>(evt.target);
      if (target.files.length !== 1) throw new Error('Cannot use multiple files');

      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {

        const bstr: string = e.target.result;
        const data = <any[]>this.ImportServ.importFromFile(bstr);

        const header: string[] = Object.getOwnPropertyNames(new Student());
        const importedData = data.slice(1,-1);
        console.log(importedData)
        this.importContacts = importedData.map(arr => {
          const obj = {};
          for (let i = 0; i < header.length; i++) {
            const k = header[i];
            obj[k] = arr[i];

          }


          console.log(obj)
          this.docs = obj
          return <Student>obj;
        })

      };
      reader.readAsBinaryString(target.files[0]);

    }
    async shows() {
      const alert = await this.alertcontroler.create({
        cssClass: 'alertCustomCss',
        message:"Are you sure you want to remove this Administrator",
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Yes',
            handler: () => {
             
                 
                    for (let item of this.importContacts) {
                      item.HoursWorked=0
                      this.ImportServ.AddStudents(item)
                  }
                  this.importContacts = []
                  this.show =false 
  
            }
          }
        ]
      });
  
      await alert.present();
    }
   
  toggled() {
    this.show = !this.show;
  }

  //Proposal
  onFileChangeProposal(evt: any) 
  {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {

      const bstr: string = e.target.result;
      const data = <any[]>this.ImportServ.importFromFile(bstr);

      const header: string[] = Object.getOwnPropertyNames(new Proposal());
      const importedData = data.slice(1,-1);
      console.log(importedData)
      this.importProposal = importedData.map(arr => {
        const obj = {};
        for (let i = 0; i < header.length; i++) {
          const k = header[i];
          obj[k] = arr[i];

        }


        console.log(obj)
        this.docs = obj
        return <Proposal>obj;
      })

    };
    reader.readAsBinaryString(target.files[0]);

  }
  //Upload proposal
  async UploadProposal()
    {
      const alert = await this.alertcontroler.create({
        cssClass: 'alertCustomCss',
        message:"Are you sure you want to Import this proposal Data",
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Yes',
            handler: () => {
             
                 
              for (let item of this.importProposal) {
                console.log(item)
               this.ImportServ.AddProposal(item)
            }
            this.importContacts = []
            this.show2 =false
            }
          }
        ]
      });
  
      await alert.present();
   
   
  }
  toggledProposalData() {
    this.show2 = !this.show2;
  }


    //Project Presentation import
    onFileChangeProjectPresentation(evt: any) 
    {
      const target: DataTransfer = <DataTransfer>(evt.target);
      if (target.files.length !== 1) throw new Error('Cannot use multiple files');
  
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
  
        const bstr: string = e.target.result;
        const data = <any[]>this.ImportServ.importFromFile(bstr);
  
        const header: string[] = Object.getOwnPropertyNames(new Presentation());
        const importedDataa = data.slice(1,-1);
       // console.log(importedDataa)
        this.importPresentation = importedDataa.map(arr => {
          const obj = {};
          for (let i = 0; i < header.length; i++) {
            const k = header[i];
            obj[k] = arr[i];
  
          }
  
  
          console.log(obj)
          this.docs = obj
          return <Presentation>obj;
        })
  
      };
      reader.readAsBinaryString(target.files[0]);
  
    }
  async UploadPresentation()
  {
      const alert = await this.alertcontroler.create({
        cssClass: 'alertCustomCss',
        message:"Are you sure you want to Import  this Presentation data",
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Yes',
            handler: () => {
             
                 
              for (let item of this.importPresentation) {
                console.log(item)
                this.ImportServ.AddPresentation(item)
            }
            this.importContacts = []
            this.show2 =false
            }
          }
        ]
      });
  
      await alert.present();
   
    
 
}
toggled3() {
  this.show3 = !this.show3;
  }
}
