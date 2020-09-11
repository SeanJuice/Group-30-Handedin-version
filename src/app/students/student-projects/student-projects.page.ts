import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-student-projects',
  templateUrl: './student-projects.page.html',
  styleUrls: ['./student-projects.page.scss'],
})
export class StudentProjectsPage implements OnInit {
  @ViewChild('searchbar',{static: true}) searchbar: ElementRef;
  searchText = '';
  Categories:boolean
  tableShow:boolean
  TheCategory:string
  Projects =[]
  constructor( 
    private ModalCtrl:ModalController,
    private router:Router,
    public navCtrl: NavController,
    private firestore: AngularFirestore)
     {
    
  }

   ngOnInit() {
     this.Categories = true;
     this.tableShow =false;

  
     

   }
  ShowTables(Number,category){
   

    switch(Number){
      case 0:{
        this.Categories=false;
        this.tableShow =true;
        this.TheCategory = category
        break;
      }
      case 1:{
        this.Categories=false;
        this.tableShow =true;
        this.TheCategory = category;
        console.log("here",this.TheCategory)
        break;
      }
      case 2:{
        this.Categories=false;
        this.tableShow =true;
        this.TheCategory = category
        break;
      }
      case 3:{
        this.Categories=false;
        this.tableShow =true;
        this.TheCategory = category
        break;
      }

    }
    if(this.tableShow && this.TheCategory != "")
    {
      this.firestore.collection("Projects").snapshotChanges().subscribe(items=>{
        this.Projects =[];
        items.forEach(a=>{
          let item:any = a.payload.doc.data()
          item.id = a.payload.doc.id;
          console.log(items)
          if(item.Status == "Available" && item.Category == this.TheCategory )
          this.Projects.push(item)
        })
        console.log(this.Projects)
      })
    }
 

  }
  async open(id) {
    const modal = await this.ModalCtrl.create({
      component:ProjectsComponent,
      componentProps:{
        ProjectId:id
      }
    });
    await modal.present()
  }

}

