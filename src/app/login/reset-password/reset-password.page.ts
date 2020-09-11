import { Reset } from './../core/Reset.model';
import { NgForm ,FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PasswordValidators } from '../core/passoword.validators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthServiceService } from '../core/auth-service.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
 // datePipeString : string;
  //date.PipeTransform
    ///this.datePipeString = datePipe.transform(Date.now(),'yyyy-MM-dd'); private datePipe: DatePipe
    form: FormGroup;
    isUserError:boolean;

  constructor(fb: FormBuilder,private firestore: AngularFirestore,
   private AfAuth:AngularFireAuth, private AuthSev:AuthServiceService) {
    this.form= fb.group({
      Email: ["",Validators.required],
      Password:  ["",Validators.required],
      NewPassword: ["",Validators.required],
      ConfirmPassword:  ["",Validators.required],
  
    }, {
      validator: PasswordValidators.passwordsShouldMatch
    });
   }

  get Email()
  {
    return this.form.get('Email')
  }
  get Password()
  {
    return this.form.get('Password')
  }
  get NewPassword()
  {
    return this.form.get('NewPassword')
  }
  get ConfirmPassword()
  {
    return this.form.get('ConfirmPassword')
  }
  ngOnInit() {
    
  }
  //Email.value,OldPassword.value,NewPassword.value,ConfirmPassword.value
  onSubmit()
  {
     let data: Reset =  this.form.value
    //Email,OldPassword,NewPassword,ConfirmPassword
    this.AfAuth.signInWithEmailAndPassword(data.Email,data.Password).then(res=>{

        res.user.updatePassword(data.NewPassword)
        this.form.reset()
         this.AuthSev.logout();
         
    }).catch(error =>{
      this.isUserError=true
        console.log(error.code)
        this.form.reset()
    })
  }

}
