import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Project } from 'src/app/administrator/models/Project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  @Input() ProjectId: string;
  constructor(
    private alertcontroler:AlertController,
    private toastController:ToastController,
    private firestore: AngularFirestore,
    public ProjectsService:ProjectsService, 
    private Modal:ModalController) 
    { }

  TheProject:Project;
  TheId:string;
  GroupNumber: number;

  ngOnInit() {
    const id = localStorage.getItem("UmuntuId")
    this.firestore.doc(`Projects/${this.ProjectId}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
      this.TheId =  items.payload.id
      console.log(item)
      this.TheProject = item
      this.firestore.doc(`students/${id}`).snapshotChanges().subscribe(stud=> {
        let st: any = stud.payload.data()
        this.GroupNumber = st.GroupNumber
        console.log(item.GroupNumber)

      })
    })
  }

  async TemporarilyChoose(id:string)
  {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want temporarily choose this project?",
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
          this.ProjectsService.TemporarilyChosenProject(id, this.GroupNumber)
          this.dismiss()
          }
        }
      ]
    });
    await alert.present();
    
  }
  
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.Modal.dismiss({
      'dismissed': true
    });
  }

}
