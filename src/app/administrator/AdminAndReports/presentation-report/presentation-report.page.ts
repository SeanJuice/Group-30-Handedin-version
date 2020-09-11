import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
//import * as html2pdf from 'html2pdf.js'
import html2pdf from 'html2pdf.js'
import * as jspdf from 'jspdf';
import { jsPDF } from "jspdf"
import { Chart } from 'chart.js'
import * as moment from 'moment';


@Component({
  selector: 'app-presentation-report',
  templateUrl: './presentation-report.page.html',
  styleUrls: ['./presentation-report.page.scss'],
})
export class PresentationReportPage implements OnInit {

  constructor(private firestore: AngularFirestore,
    private db:AngularFireDatabase) { }
    isGenerated:boolean
    Linechart = [];
    TodaysDate =  Date.now()
    isShow:boolean
    isShowP:boolean
    Data =[0,0,0]
    DataLabels=["Groups Presented","Groups Still to Present"]    
    AbouTPresent =[]
    AlreadyPresented  =[]
    new =  new Date()
    date: Date = null;
    ///Specific Reports 
    isSpecific:Boolean
    value: '16/12/2020'
    dateParts:any;
    dateObject:any
  ngOnInit() {
    console.log(moment(this.value, "DD/MM/YYYY"))
    this.dateParts =moment(this.value, "DD/MM/YYYY")
    this.dateParts.toDate()
    console.log(this.dateParts)
  }
  
  
  random_rgba(){
    var o = Math.round,r =Math.random, s=255;
    return 'rgba('+o(r()*s)+','+o(r()*s)+','+o(r()*s)+',0.7)';
  }
  GenerateChart()
  {
        let  GoodCount =0
        let  BadCount =0
        this.isShow =true
        this.isShowP =true
        let  ModerateCount =0
        this.isSpecific = true 
        this.firestore.collection("PresentationsReporting").snapshotChanges().subscribe(items => {
          items.forEach(a => {
            let item: any = a.payload.doc.data()
            item.id = a.payload.doc.id;
      
  
            if(item.PresentationDate > Date.now().toString() )
            {
              GoodCount = GoodCount+1
              this.AbouTPresent.push(item)
            }
            else
            {
              ModerateCount = ModerateCount+1
              console.log(item)
              this.AlreadyPresented.push(item)
            }

        
            
          })

          this.Data = [GoodCount,ModerateCount]

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
                  display: true,
                  ticks: {  beginAtZero:true,min: 0 },
                }],
                yAxes: [{
                  display: true,
                  ticks: {  beginAtZero:true,min:  0 },
                },
              ],
      
      
              }
            }
          }));
        })

  
        
  }


  Download()
  {
    const options = {
            margin: [0.5,0.5],
            filename: 'PresentationReport.pdf',
            image:{type: 'jpeg',quality:'0.98'},
            html2canvas:{},
            jsPDF:{orientation:'landscape', format: 'a3'}
          };
            //console.log("here1")
          const content: Element = document.getElementById('content');
          console.log("heree",content)
            //console.log(options)
          html2pdf().from(content).set(options).save();
  }
}
