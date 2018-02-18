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
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      AuthorizationKey: "as@dL8]Rn3$2S!anR"
    });
    const params = new HttpParams();
    const options = {
      headers,
      params,
      withCredentials: true
    };
    return this.http.post(
      "/api/web/user/login",
      `MobileNumber=${loginForm.MobileNumber}`,

      options
    );
  }

  register(user) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      AuthorizationKey: "as@dL8]Rn3$2S!anR"
    });

    const params = new HttpParams()
    const options = {
      headers,
      params,
      withCredentials: true
    };
    return this.http.post("/api/web/user/register", JSON.stringify({
        AuthorizationKey: user.AuthorizationKey,
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
