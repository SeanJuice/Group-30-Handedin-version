import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
//import * as html2pdf from 'html2pdf.js'
import html2pdf from 'html2pdf.js'
import * as jspdf from 'jspdf';
import { jsPDF } from "jspdf"
import { Chart } from 'chart.js'

@Component({
  selector: 'app-performance-report',
  templateUrl: './performance-report.page.html',
  styleUrls: ['./performance-report.page.scss'],
})
export class PerformanceReportPage implements OnInit {

  constructor(private firestore: AngularFirestore,
    private db:AngularFireDatabase) { }
    isGenerated:boolean
    Linechart = [];
    TodaysDate =  Date.now()
    isShow:boolean
    isShowP:boolean
    Data =[0,0,0]
    DataLabels=["Good Performing","Moderate Performing",'Bad Performing']    
    GoodPerforming =[]
    ModeratePerforming  =[]
    BadToolsPerforming  =[]
    ///Specific Reports 
    isSpecific:Boolean
  ngOnInit() {
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
        this.firestore.collection("StudentMarks").snapshotChanges().subscribe(items => {
          items.forEach(a => {
            let item: any = a.payload.doc.data()
            item.id = a.payload.doc.id;
      

            if(item.Mark > 80 )
            {
              GoodCount = GoodCount+1
              this.GoodPerforming.push(item)
            }
            else if(item.Mark >50 )
            {
              ModerateCount = ModerateCount+1
              console.log(item)
              this.ModeratePerforming.push(item)
            }
            else if(item.Mark < 50 )
            {
              BadCount = BadCount+1
              console.log(item)
              this.BadToolsPerforming.push(item)
            }
            else{
              console.log("other",item)
            }

        
            
          })

          this.Data = [GoodCount,ModerateCount,BadCount]

          this.Linechart.push(new Chart('canvass', {
            type: 'bar',
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


  GenerateChartGood()
  {

        let Dataa =[]
       let  DataLabelss = []
        let  GoodCount =0
        let  BadCount =0
        this.isShow =true
        this.isShowP =true
        let  ModerateCount =0
        this.firestore.collection("StudentMarks").snapshotChanges().subscribe(items => {
          items.forEach(a => {
            let item: any = a.payload.doc.data()
            item.id = a.payload.doc.id;
      

            if(item.Mark > 80 )
            {
              
              this.GoodPerforming.push(item)
                Dataa.push(item.Mark)
                DataLabelss.push(item.StudentName)
            }
            else{
              console.log("other",item)
            }

        
            
          })

         

          this.Linechart.push(new Chart('canvass', {
            type: 'bar',
            data: {
              labels:   DataLabelss,
              datasets: [
                {
                  data: Dataa,
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
            filename: 'ToolConditionReport.pdf',
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
