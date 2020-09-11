import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, ToastController, IonContent } from '@ionic/angular';
import { NewsfeedService } from './newsfeed.service';
import { Post } from '../Models/newsfeed.models';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ThrowStmt } from '@angular/compiler';
import { FileUpload } from 'src/app/register/applications/driver-application/file.model';

@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.page.html',
  styleUrls: ['./news-feeds.page.scss'],
})
export class NewsFeedsPage implements OnInit {
  constructor(private alertcontroler: AlertController,
    private toastController: ToastController, 
    public newsfeedserve:NewsfeedService,  private firestore: AngularFirestore,
    private db:AngularFireDatabase,) { }
  
    @ViewChild(IonContent, {static: true}) content: IonContent

  Showeditbutton:boolean;
  Showaddbutton:boolean;
  Description
  post:Post = new Post();
  Posts =[]
  currentFileUpload: FileUpload;
  selectedFiles: FileList; 
  progress: { percentage: number } = { percentage: 0 };
  SavedID:string


  ngOnInit() {
    this.Showeditbutton=false;
    this.Showaddbutton=true;

    this.firestore.collection("Posts").snapshotChanges().subscribe(items=>{
      this.Posts =[];
      items.forEach(a=>{
        let item:any = a.payload.doc.data()
        item.id = a.payload.doc.id;
        this.Posts.push(item)
      })
      console.log(this.Posts)
    })

  }
  show(id)
  {
    this.firestore.doc(`Posts/${id}`).snapshotChanges().subscribe(items=>{
      let datetem:any = items.payload.data()
          this.post.Description= datetem.Description
         // datetem.Id = items.payload.id
          this.newsfeedserve.form.setValue(datetem)
        })
 
          this.SavedID=id
          this.ScrollToTop()
          this.Showeditbutton=true;
          this.Showaddbutton=false;
    
  }

  ///
  async ConfirmationDelete(id:string,Url:string) {
    
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want to delete this post ?",
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
           //this.show()
           this.newsfeedserve.DeletePost(id,Url)
           this.SuccesfullyDeleted()
           this.newsfeedserve.form.reset()
          }
        }
      ]
    });

    await alert.present();
  }

  async SuccesfullyDeleted() {
    const toast = await this.toastController.create({
      message: 'Post successfully deleted .',
      position:"middle",
      color:"secondary",
      duration: 2000
    });
    toast.present();
  }
  async ConfirmationPost(id) {
    if (this.Showeditbutton == true )
    {
      const alert = await this.alertcontroler.create({
        cssClass: 'alertCustomCss',
        message:"Are you sure you want make changes ?",
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
              let data= this.newsfeedserve.form.value;
              console.log(id)
              this.newsfeedserve.UpdatePost(id,data)
              this.newsfeedserve.form.reset
              this.Showeditbutton=false;
              this.Showaddbutton=true;
              this.SavedID=""
              this.newsfeedserve.form.reset()
             //this.show()
             //this.SuccesfullyDeleted()
             
            }
          }
        ]
      });
  
      await alert.present();
    }
    else{
      const alert = await this.alertcontroler.create({
        cssClass: 'alertCustomCss',
        message:"Are you sure you want to  post ?",
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
              
              let data= this.newsfeedserve.form.value;
              console.log(data)
              this.upload(data)
             
             //this.show()
             
             this.SuccesfullyDeleted()
             
            }
          }
        ]
      });
  
      await alert.present();
    }

  }
 //goes to the top when you click edit
 ScrollToTop() {
  this.content.scrollToTop(1500);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    }
    upload(data)
      {
        const file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new FileUpload(file);
        let fileT = this.currentFileUpload.file.type
        console.log( this.currentFileUpload.file.type)
        if(fileT=="video/mp4" || fileT=="image/jpeg" || fileT=="image/png")
        {
          this.newsfeedserve.pushFileToStorage(this.currentFileUpload,"Posts",data,this.progress)
        }
        //
      }
    
      filetypeCheker(file)
      {
        if(file=="video/mp4")
        {
          return true
        }
        else{
          return false
        }
      }
}
