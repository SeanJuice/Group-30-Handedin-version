import { ClaimFormComponent } from './../../Finance/claim-form/claim-form.component';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TooRequestService } from './too-request.service';

@Component({
  selector: 'app-tool-requests',
  templateUrl: './tool-requests.component.html',
  styleUrls: ['./tool-requests.component.scss'],
})
export class ToolRequestsComponent implements OnInit {

  constructor(
    public navCtrl: NavController,
    private alertcontroler: AlertController,
    private db: AngularFirestore,
    private RequestSev: TooRequestService) { }
  @ViewChild('searchbar', { static: true }) searchbar: ElementRef;
  searchText = '';
    Tools= []
    StudentInfo:any
  ngOnInit() {
    this.db.collection("Tools").snapshotChanges().subscribe(items => {
      this.Tools = []
      items.forEach(a => {
        let item: any = a.payload.doc.data()
        item.id = a.payload.doc.id;

        if(item.ToolStatusID == "Requested" )
        {
          this.Tools.push(item)
        }
        
      })
    })
  }
  
    ///Confirm
    async Confirmation(ToolId,Reject) {
      let message = "accept"
      if(Reject)
      {
        message = "reject"
      }
      const alert = await this.alertcontroler.create({
        cssClass: 'alertCustomCss',
        message:`Are you sure you want to ${message} the tool request`,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Confirm',
            handler: () => {
              if(Reject)
              this.RequestSev.RejectRequest(ToolId)
              else{
                this.RequestSev.AcceptRequest(ToolId)
              }
              
            }
          }
        ]
      });
  
      await alert.present();
    }
    //viewing student Details

    ViewStudent(StudentID:string)
    {
      this.db.doc(`students/${StudentID}`).snapshotChanges().subscribe(items => {
        let item: any = items.payload.data()
        console.log(item)
        this.StudentInfo = item
  
      })
    }

}
