import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-group-account',
  templateUrl: './student-group-account.component.html',
  styleUrls: ['./student-group-account.component.scss'],
})
export class StudentGroupAccountComponent implements OnInit {

  constructor(private firestore:AngularFirestore) { }
  Receipts =[];
  @Input() GroupNo: string;
  ngOnInit() {

    this.firestore.collection("StudentReceipts").snapshotChanges().subscribe(items=>{
      this.Receipts =[];
      items.forEach(a=>{
        let item:any = a.payload.doc.data()
        item.id = a.payload.doc.id;
        if(item.GroupNo ==this.GroupNo )
        this.Receipts.push(item)
      })
     // console.log(this.Receipts)
    })
  }
  }


