import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-login-credentials',
  templateUrl: './generate-login-credentials.page.html',
  styleUrls: ['./generate-login-credentials.page.scss'],
})
export class GenerateLoginCredentialsPage implements OnInit {
  ErrorMessage:string;

  constructor(private router: Router,private AfAuth:AngularFireAuth, private firestore:AngularFirestore) { }


  ngOnInit() {

  }

   
    onSubmit(studentNo)
    {
      let StudentInfo:any
      let StudentId:string
      let isFound:boolean

      this.firestore.collection("students2").snapshotChanges().subscribe(items=>{
        items.forEach(a=>{
          let item:any = a.payload.doc.data()
          item.Id = a.payload.doc.id;
          if(item.Student_No==studentNo)
          {
            StudentInfo  =item
            StudentId =   item.Id
              isFound =true;
          }
          
        })
      })
      
      if(isFound)
      {
            let RandomPassword =  this.RandomPassword()
            let Email = `u${studentNo}@tuks.co.za`
         
          
            this.AfAuth.createUserWithEmailAndPassword(Email,RandomPassword).then(
              res=>{
                res.user.sendEmailVerification();
                //add Remove Student
                this.firestore.doc(`students2/${StudentId}`).delete()
                this.firestore.collection("students2/").doc(res.user.uid).set(StudentInfo)
              //add Student to the users 
                this.firestore.collection('Users').doc(res.user.uid).set({
                  UserTypeID: "Student",
                  AccessRoleID:"Student",
                  Email:Email,
                  TempPassword:RandomPassword
                })
                window.alert('Please validate your email address. Kindly check your inbox.');
                this.router.navigate([''])
          })
      }
      else{
        window.alert('Student not found,Please check if your studentNo is correct.');
      }

    }
    RandomPassword(){
      var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
          }
  
          return retVal
  }
      

}
