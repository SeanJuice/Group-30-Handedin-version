import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
//import * as html2pdf from 'html2pdf.js'
import html2pdf from 'html2pdf.js'
import * as jspdf from 'jspdf';
import { jsPDF } from "jspdf"

@Component({
  selector: 'app-tool-report',
  templateUrl: './tool-report.page.html',
  styleUrls: ['./tool-report.page.scss'],
})
export class ToolReportPage implements OnInit {

  isGenerated:boolean
  TodaysDate=  Date.now()
  Linechart = [];
  Data =[0,0,0]
  DataLabels=["Good","Moderate",'Bad']
 
  GoodTools =[]
  ModerateTools =[]
  BadTools =[]
  isShow:boolean
  isShowP:boolean
  constructor(private firestore: AngularFirestore,
    private db:AngularFireDatabase) { }

  ngOnInit() {
  }

  GenerateChart()
  {
        let  GoodCount =0
        let  BadCount =0
        this.isShow =true
        this.isShowP =true
        let  ModerateCount =0
        this.firestore.collection("ToolReporting").snapshotChanges().subscribe(items => {
          items.forEach(a => {
            let item: any = a.payload.doc.data()
            item.id = a.payload.doc.id;
      

            if(item.Condition == "Good" )
            {
              GoodCount = GoodCount+1
              this.GoodTools.push(item)
            }
            else if(item.Condition == "Moderate" )
            {
              ModerateCount = ModerateCount+1
              console.log(item)
              this.ModerateTools.push(item)
            }
            else if(item.Condition == "Bad" )
            {
              BadCount = BadCount+1
              console.log(item)
              this.BadTools.push(item)
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
   isCondition(element, index, array) { 
     console.log(element.Condition)
    return (element.Condition == "Good"); 
 } 

  random_rgba(){
    var o = Math.round,r =Math.random, s=255;
    return 'rgba('+o(r()*s)+','+o(r()*s)+','+o(r()*s)+',0.7)';
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
