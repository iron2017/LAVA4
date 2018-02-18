import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { TabsPage } from '../../pages/tabs/tabs';
import { AlertController } from "ionic-angular";

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  private config = {
    baseUrl: "/api/",
    AuthorizationKey: "as@dL8]Rn3$2S!anR",
    headers: new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      AuthorizationKey: "as@dL8]Rn3$2S!anR"
    })
  };

  constructor(public http: HttpClient, private alertCtrl: AlertController) {
    console.log("Hello AuthenticationProvider Provider");
  }

  login(loginForm) {
    const headers = this.config.headers;
    const params = new HttpParams();
    const options = {
      headers,
      params,
      withCredentials: true
    };
    return this.http.post(
      `${this.config.baseUrl}/web/user/login`,
      `MobileNumber=${loginForm.MobileNumber}`,
      options
    );
  }

  register(user) {
    const headers = this.config.headers;
    const params = new HttpParams()
    const options = {
      headers,
      params,
      withCredentials: true
    };
    return this.http.post(`${this.config.baseUrl}/web/user/register`, JSON.stringify({
        AuthorizationKey: this.config.AuthorizationKey,
        FullName: user.FullName,
        MobileNumber: user.MobileNumber,
        CityID: user.CityID,
        RegionID: user.RegionID,
        Email: user.Email,
        NationalityID: user.NationalityID,
        Language: user.Language,
        BirthDate: user.BirthDate
      }), options);
  }
}
