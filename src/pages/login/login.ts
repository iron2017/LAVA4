import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  signupForm: FormGroup;
  signinForm: FormGroup;
  loginOrSignUp = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {
    this.signinForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.signupForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.maxLength(30),
        Validators.pattern(/[a-zA-Z0-9_]+/)]),
      ],
      email: ['', Validators.compose(
        [Validators.required, Validators.maxLength(40),
          Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
      password: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



onSignIn() {

}

onSignUp() {

}

toggleShowLogin($event) {
  $event.preventDefault()
  this.loginOrSignUp = !this.loginOrSignUp;

}

}
