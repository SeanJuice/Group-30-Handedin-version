import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
//import * as html2pdf from 'html2pdf.js'
import html2pdf from 'html2pdf.js'
import * as jspdf from 'jspdf';
import { jsPDF } from "jspdf"


@Component({
  selector: 'app-driver-report',
  templateUrl: './driver-report.page.html',
  styleUrls: ['./driver-report.page.scss'],
})
export class DriverReportPage implements OnInit {
  //Chart arrays
  isGenerated:boolean
  Linechart = [];
  Data =[]
  DataLabels=[]
  ExisitingDrivers =[]
  TodaysDate =  Date.now()
  constructor(private firestore: AngularFirestore,
    private db:AngularFireDatabase) { }

  ngOnInit() {
  }
  PolaraArea()
  {
    this.firestore.collection("Drivers").snapshotChanges().subscribe(items=>{
      this.ExisitingDrivers =[];
      items.forEach(a=>{
          let item:any = a.payload.doc.data()
          item.id = a.payload.doc.id;
       
          //check if the driver is an applicant 
          this.firestore.doc(`Users/${item.id}`).snapshotChanges().subscribe(user=>{
                  //items.forEach(a=>{
                    let Theuser:any = user.payload.data()
                    Theuser.id = user.payload.id;
                  
                    if(Theuser.AccessRoleID !="Applicant")
                    {
                      
                          this.ExisitingDrivers.push(item)
                    }
                    else{
                      
                    }
                })
      })
      console.log(this.ExisitingDrivers)
    })//

    this.firestore.collection("DummyReporting").snapshotChanges().subscribe(items=>{
      this.Data =[];
      this.DataLabels =[]
      this.isGenerated=true
      items.forEach(a=>{

       let item:any = a.payload.doc.data()
       item.id = a.payload.doc.id;
       //console.log(item)
       this.Data.push(item.Quantity)
       this.DataLabels.push(item.ToolName)

      })



    this.Linechart.push(new Chart('canvass', {
      type: 'pie',
      data: {
        labels:   this.DataLabels,
        datasets: [
          {
            data: this.Data,
            borderColor: '#3cb371',
            backgroundColor: [
              this.random_rgba(),
              this.random_rgba(),
      
            ],
          }
        ],
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {  beginAtZero:false,min: 0.2 },
          }],
          yAxes: [{
            display: false,
            ticks: {  beginAtZero:false,min:  0.2 },
          },
        ],


        }
      }
    }));
  })
  }


  random_rgba(){
    var o = Math.round,r =Math.random, s=255;
    return 'rgba('+o(r()*s)+','+o(r()*s)+','+o(r()*s)+',0.7)';
  }

  Download()
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
