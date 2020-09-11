import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(    public angularFireAuth: AngularFireAuth,
    public router: Router) { }
message:string
isMessage:boolean
  ngOnInit() {
  }
  async onSubmit(passwordResetEmail: string) {
    return await this.angularFireAuth.sendPasswordResetEmail(passwordResetEmail).catch(res =>{
      this.message = "Wrong Email or User Does not Exist";
      this.isMessage = true
      this.router.navigate(['/login'])
    });
  }
 
}
