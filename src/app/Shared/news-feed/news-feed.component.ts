import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {

  constructor( private firestore: AngularFirestore) { }
  Posts =[]
  ngOnInit() {
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
     
  filetypeChecker(file)
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
