import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthenticationProvider } from "../authentication/authentication";

@Injectable()
export class ProfileProvider {
  private profile = {
    status: 1,
    data: {
      FullName: "asdfad",
      IdentityID: 123456789,
      SocialStatus: 1,
      Address: "",
      BirthDate: "1993-04-22",
      CityName: "الریاض",
      RegionName: "الجزیرة",
      MobileNumber: "966*********",
      Language: "AR",
      Email: "aaaaa@gmail.com",
      NationalityID: 1
    }
  };

  private headers;

  constructor(
    public http: HttpClient,
    private authProvider: AuthenticationProvider
  ) {
    console.log("Hello ProfileProvider Provider");

    this.headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      AuthorizationKey: this.authProvider.config.AuthorizationKey,
      AccessToken: this.authProvider.config.AccessToken
    })
  }

  getProfile() {
    return this.http.get(
      `${this.authProvider.config.baseUrl}/web/user/profile`,
      this.headers
    );
  }

  getCities() {
    return this.http.get(
      `${this.authProvider.config.baseUrl}/web/city/index`,
      this.headers
    );
  }

  getRegions() {
    return this.http.get(
      `${this.authProvider.config.baseUrl}/web/region/index`,
      this.headers
    );
  }

  getBranches() {
    return this.http.get(
      `${this.authProvider.config.baseUrl}/web/branche/index`,
      this.headers
    );
  }

  getJobTitles() {
    return this.http.get(
      `${this.authProvider.config.baseUrl}/web/job-title/index`,
      this.headers
    );
  }

  getNationalities() {
    return this.http.get(
      `${this.authProvider.config.baseUrl}/web/nationality/index`,
      this.headers
    );
  }

  getServices() {
    return this.http.get(
      `${this.authProvider.config.baseUrl}/web/service/index`,
      this.headers
    );
  }

  getMembership() {
    return this.http.get(
      `${this.authProvider.config.baseUrl}/web/membership/index`,
      this.headers
    );
  }

  updateUser(updatedUser) {
    const headers = this.authProvider.config.headers;
    const params = new HttpParams();
    const options = {
      headers,
      params,
      withCredentials: true
    };
    return this.http
      .post(
        `${this.authProvider.config.baseUrl}/web/user/update`,
        JSON.stringify({
          AuthorizationKey: this.authProvider.config.AuthorizationKey,
          AccessToken: this.authProvider.config.AccessToken,
          FullName: updatedUser.FullName,
          MobileNumber: updatedUser.MobileNumber,
          CityID: updatedUser.CityID,
          RegionID: updatedUser.RegionID,
          Email: updatedUser.Email,
          NationalityID: updatedUser.NationalityID,
          Language: updatedUser.Language,
          BirthDate: updatedUser.BirthDate
        }),
        options
      )
  }


}
