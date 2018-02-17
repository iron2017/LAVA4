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
    baseUrl: "http://lava.sa/api/web",
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
    // console.log(loginForm.controls.phone.value);
    // return this.http.post(this.endpoints.login, {MobileNumber: loginForm.controls.phone.value}, this.config.userOptions);

    // let body = JSON.stringify(data);
    // let headers: Headers = new Headers();
    // headers.append('latitude', '23.259933');
    // headers.append('longitude', '77.412615');
    // headers.append('nearby', '5');
    // headers.append('Content-Type', 'application/json');

    // let options = new RequestOptions({ headers: headers });

    // return this.http.post(this.url, body, options)
    //     .map((res: Response) => res.json())
    //     .catch(error => error);

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "as@dL8]Rn3$2S!anR"
      })
    };

    const httpfuck = {
      headers: new HttpHeaders().set(
        "Authorization",
        "as@dL8]Rn3$2S!anR"
      ).set(
        "Content-Type",
        "application/json"
      ) }

    // console.log(this.endpoints.login)
    // console.log({MobileNumber: loginForm.controls.phone.value})
    // console.log({httpOptions})

    return this.http
      .post('http://lava.sa/api/web/user/login', loginForm, httpfuck);
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
