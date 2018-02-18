import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
// import { TabsPage } from '../../pages/tabs/tabs';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {
  private config = {
    baseUrl: "/api/web",
    AuthorizationKey: "as@dL8]Rn3$2S!anR",
    userOptions: {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        AuthorizationKey: "as@dL8]Rn3$2S!anR"
      })
    }
  };

  private endpoints = {
    login: `${this.config.baseUrl}/user/login`,
    register: `${this.config.baseUrl}/user/register`,
    Assets: `${this.config.baseUrl}/service/index`
  };

  constructor(public http: HttpClient, private alertCtrl: AlertController) {
    console.log("Hello AuthenticationProvider Provider");
  }

  login(loginForm) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json",
    //     "AuthorizationKey": "as@dL8]Rn3$2S!anR"
    //   })
    // };

    // console.log(httpOptions.headers.get("Content-Type"));
    // return this.http.post("http://lava.sa/api/web/user/login", JSON.stringify({
    //   "Username": "0596909965",
    //   "Password": "1234567"
    // }), httpOptions)

    // const params = new HttpParams()
    //   .set("MobileNumber", "966541114424");

    // const headers = new HttpHeaders()
    //   .set("Authorization", " Basic as@dL8]Rn3$2S!anR")
    //   // .set("AuthorizationKey", " Basic as@dL8]Rn3$2S!anR")
    //   .set("AuthorizationKey", " as@dL8]Rn3$2S!anR")
    //   .set("Content-Type", "application/x-www-form-urlencoded");

    // const httpOptions = {
    //   headers: headers,
    //   params: params,
    //   withCredentials: true
    // };

    // return this.http.post<Response>("http://lava.sa/api/web/user/login",  new FormData(), httpOptions )

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'AuthorizationKey': 'as@dL8]Rn3$2S!anR'
    });
    const params = new HttpParams()
      .set("MobileNumber", "966541114424");
    const options = {
      headers,
      params,
      withCredentials: true
    };
    return this.http.post('/api/web/user/login', `MobileNumber=${loginForm.MobileNumber}`, options)




  }

  register(user) {
    return this.http.post(
      "http://lava.sa/api/web/user/register",
      {
        AuthorizationKey: "as@dL8]Rn3$2S!anR",
        FullName: "Turki Alomari",
        MobileNumber: "966541114424",
        CityID: "1",
        RegionID: null,
        Email: null,
        NationalityID: null,
        Language: null,
        BirthDate: null
      },
      this.config.userOptions
    );
  }

  getAssets(accessToken) {
    return this.http.get(this.endpoints.Assets, {
      headers: {
        Authorization: this.config.AuthorizationKey
      },
      params: {
        AccessToken: accessToken
      }
    });
  }
}
