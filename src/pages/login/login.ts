import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationProvider } from "../../providers/authentication/authentication";
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  signupForm: FormGroup;
  signinForm: FormGroup;
  loginOrSignUp = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private auth: AuthenticationProvider,
    private alertCtrl: AlertController
  ) {
    this.signinForm = formBuilder.group({
      MobileNumber: ["", Validators.required]
    });

    // "AuthorizationKey":"as@dL8]Rn3$2S!anR",
    // "FullName":"Turki Alomari",
    // "MobileNumber":"966541114424",
    // "CityID": "1",
    // "RegionID":null,
    // "Email":null,
    // "NationalityID":null,
    // "Language":null,
    // "BirthDate":null

    this.signupForm = formBuilder.group({
      FullName: [
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(30),
          Validators.pattern(/[a-zA-Z0-9_]+/)
        ])
      ],
      MobileNumber: [
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(30),
          Validators.pattern(/[a-zA-Z0-9_]+/)
        ])
      ],
      CityID: [
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(30),
          Validators.pattern(/[a-zA-Z0-9_]+/)
        ])
      ]
      // RegionID: ['', Validators.compose([Validators.required, Validators.maxLength(30),
      //   Validators.pattern(/[a-zA-Z0-9_]+/)]),
      // ],
      // Email: ['', Validators.compose(
      //   [Validators.required, Validators.maxLength(40),
      //     Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],

      // NationalityID: ['', Validators.compose([Validators.required, Validators.maxLength(30),
      //   Validators.pattern(/[a-zA-Z0-9_]+/)]),
      // ],
      // Language: ['', Validators.compose([Validators.required, Validators.maxLength(30),
      //   Validators.pattern(/[a-zA-Z0-9_]+/)]),
      // ],
      // BirthDate: ['', Validators.compose([Validators.required, Validators.maxLength(30),
      //   Validators.pattern(/[a-zA-Z0-9_]+/)]),
      // ],
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  onSignIn() {
    this.auth.login(this.signinForm.value).subscribe(
      res => {

        let alert = this.alertCtrl.create({
          title: "Enter verification code",
          message: "The code we sent to " + this.signinForm.value.MobileNumber,
          inputs: [
            {
              name: "code",
              placeholder: "code",
              type: "number"
            }
          ],
          buttons: [
            {
              text: "cancel",
              role: "cancel",
              handler: () => {
                console.log("Cancel clicked");
              }
            },
            {
              text: "Log in",
              handler: () => {
                this.navCtrl.setRoot(TabsPage);
              }
            }
          ]
        });
        alert.present();
      },
      error => {
        let alert = this.alertCtrl.create({
          message: error.error.errors,
          buttons: [
            {
              text: "cancel",
              role: "cancel",
              handler: () => {
                console.log("Cancel clicked");
              }
            }
          ]
        });
        alert.present();
      }
    );
  }

  onSignUp(user) {
    this.auth.register(this.signupForm.value).subscribe(
      res => {
        let alert = this.alertCtrl.create({
          title: "Enter verification code",
          message: "The code we sent to " + this.signupForm.value.MobileNumber,
          inputs: [
            {
              name: "code",
              placeholder: "code",
              type: "number"
            }
          ],
          buttons: [
            {
              text: "cancel",
              role: "cancel",
              handler: () => {
                console.log("Cancel clicked");
              }
            },
            {
              text: "Log in",
              handler: () => {
                this.navCtrl.setRoot(TabsPage);
              }
            }
          ]
        });
        alert.present();
      },
      error => {
        let alert = this.alertCtrl.create({
          message: error.error.errors,
          buttons: [
            {
              text: "cancel",
              role: "cancel",
              handler: () => {
                console.log("Cancel clicked");
              }
            }
          ]
        });
        alert.present();
      }
    );
  }

  toggleShowLogin($event) {
    $event.preventDefault();
    this.loginOrSignUp = !this.loginOrSignUp;
  }
}
