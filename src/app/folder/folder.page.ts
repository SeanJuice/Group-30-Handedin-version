import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private alertcontroler: AlertController,public toastController: ToastController ) { }
  
 Page1:boolean
 Page2:boolean
 Page3:boolean
 Page4:boolean
 Page5:boolean
 Page6:boolean 
 Page7:boolean 

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.Page1=true;
    
  }

  Show(Check:Number)
  {
    if(Check==1)
    {
      this.Page1 =true;
      this.SetFalse(Check)
      return this.Page1
    }
    else if(Check==2)
    {
      this.Page2 =true;
      this.SetFalse(Check)
      return this.Page2
    }
    else if(Check==3)
    {
      this.Page3 =true;
      this.SetFalse(Check)
      return this.Page3 
    }
    else if(Check==4)
    {
      this.Page4 =true;
      this.SetFalse(Check)
      return this.Page4  
    }
    else if(Check==5)
    {
      this.Page5 =true;
      this.SetFalse(Check)
      return this.Page5   
    }
    else if(Check==6)
    {
      this.Page6 =true;
      this.SetFalse(Check)
      return this.Page6   
    }
    else if(Check==7)
    {
      this.Page7 =true;
      this.SetFalse(Check)
      return this.Page7  
    }
  }
 SetFalse(Numb:Number)
 {
  switch (Numb) {
    case 1:
      this.Page2 =false;
      this.Page3 =false;
      this.Page4 =false;
      this.Page5 =false;
      this.Page6 =false;
      this.Page7 =false;
        break;
    case 2:
          this.Page1 =false;
          this.Page3 =false;
          this.Page4 =false;
          this.Page5 =false;
          this.Page6 =false;
          this.Page7 =false;
            break;
   case 3:
          this.Page1 =false;
          this.Page2 =false;
          this.Page4 =false;
          this.Page5 =false;
          this.Page6 =false;
          this.Page7 =false;
            break;
   case 4:
          this.Page1 =false;
          this.Page3 =false;
          this.Page2 =false;
          this.Page5 =false;
          this.Page6 =false;
          this.Page7 =false;
          break;        
        
  case 5:
         this.Page1 =false;
          this.Page3 =false;
          this.Page4 =false;
          this.Page2 =false;
          this.Page6 =false;
          this.Page7 =false;
            break; 
   case 6:
          this.Page1 =false;
          this.Page3 =false;
          this.Page4 =false;
         this.Page2 =false;
         this.Page7 =false;
         
          break; 
    case 7:
            this.Page1 =false;
            this.Page3 =false;
            this.Page4 =false;
           this.Page2 =false;
           this.Page6 =false;
           
            break; 
  }
 }


 

     /////////////////////////
       
}
