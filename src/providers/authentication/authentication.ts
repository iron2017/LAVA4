import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

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
        Authorization: "as@dL8]Rn3$2S!anR"
      })
    }
  };

  private endpoints = {
    login: `${this.config.baseUrl}/user/login`,
    register: `${this.config.baseUrl}/user/register`,
    Assets: `${this.config.baseUrl}/service/index`
  };

  constructor(public http: HttpClient) {
    console.log("Hello AuthenticationProvider Provider");
  }

  login(loginForm) {
    const httpOptions = {
      headers: new HttpHeaders({
        "AuthorizationKey" :"as8dL88Rn382S5anR",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    console.log(httpOptions.headers.get("AuthorizationKey"));
    return this.http.post("http://lava.sa/api/web/user/login", JSON.stringify({MobileNumber: '966541114424'}), httpOptions)
  }

  register(user) {
    return this.http.post(
      this.endpoints.register,
      user,
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
