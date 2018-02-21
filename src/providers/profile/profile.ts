import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthenticationProvider } from "../authentication/authentication";
import { of } from "rxjs/observable/of";

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
    });
  }

  getProfile() {
    if (this.authProvider.config.debug) {
      return of({
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
      });
    }
    return this.http.get(
      `${this.authProvider.config.baseUrl}/web/user/profile`,
      this.headers
    );
  }

  getCities() {
    if (this.authProvider.config.debug) {
      return of({
        status: 1,
        data: [
          {
            ID: 1,
            NameAR: "\u0627\u0644\u0631\u064a\u0627\u0636",
            NameEN: "Riyadh"
          }
        ]
      });
    }
    return this.http.get(
      `${this.authProvider.config.baseUrl}/web/city/index`,
      this.headers
    );
  }

  getRegions() {
    if (this.authProvider.config.debug) {
      return of({
        status: 1,
        data: [
          {
            ID: 1,
            NameAR: "العلیا",
            NameEN: "Al Olya",
            CityID: 1
          },
          {
            ID: 2,
            NameAR: "السلیمانیة",
            NameEN: "Al Solimania",
            CityID: 1
          }
        ]
      });
    }
    return this.http.get(
      `${this.authProvider.config.baseUrl}/web/region/index`,
      this.headers
    );
  }

  getBranches() {
    if (this.authProvider.config.debug) {
      return of({
        status: 1,
        data: [
          {
            ID: 1,
            NameAR: "لافا حي القدس",
            NameEN: "Lava Al Quds",
            Phone: null,
            RegionID: 29,
            Address: "الطریق الدائري الشرقي - مخرج 10",
            AddressEN: null
          },
          {
            ID: 2,
            NameAR: "لافا مدینة الملك فهد الطبیة",
            NameEN: "Lava KFMC",
            Phone: null,
            RegionID: 1,
            Address: "طریق خریض",
            AddressEN: null
          }
        ]
      });
    }
    return this.http.get(
      `${this.authProvider.config.baseUrl}/web/branche/index`,
      this.headers
    );
  }

  getJobTitles() {
    if (this.authProvider.config.debug) {
      return of({
        status: 1,
        data: [
          {
            ID: 1,
            TitleAR: "بدون عمل",
            TitleEN: "Jobless"
          },
          {
            ID: 2,
            TitleAR: "طبیبة",
            TitleEN: "Doctor"
          }
        ]
      });
    }
    return this.http.get(
      `${this.authProvider.config.baseUrl}/web/job-title/index`,
      this.headers
    );
  }

  getNationalities() {
    if (this.authProvider.config.debug) {
      return of({
        status: 1,
        data: [
          {
            ID: 1,
            NameAR: "السعودیة",
            NameEN: "Saudi Arabia"
          },
          {
            ID: 2,
            NameAR: "الاردن",
            NameEN: "Jordan"
          }
        ]
      });
    }
    return this.http.get(
      `${this.authProvider.config.baseUrl}/web/nationality/index`,
      this.headers
    );
  }

  getServices() {
    if (this.authProvider.config.debug) {
      return of({
        status: 1,
        data: [
          {
            ID: 1,
            NameAR: "الصالات الریاضیة",
            NameEN: "GYM"
          },
          {
            ID: 2,
            NameAR: "اسشارة أخصائیة التغذیة",
            NameEN: "Nutrition Consultation"
          }
        ]
      });
    }
    return this.http.get(
      `${this.authProvider.config.baseUrl}/web/service/index`,
      this.headers
    );
  }

  getMembership() {
    if (this.authProvider.config.debug) {
      return of({
        status: 1,
        data: {
          BranchID: 1,
          StartDate: "2017-11-15",
          EndDate: "2018-11-10",
          CreationDate: "2016-09-25 00:00:00",
          Period: 360,
          Services: {
            "2": 2,
            "4": 2,
            "5": 2,
            "6": 3,
            "7": 6
          }
        }
      });
    }
    return this.http.get(
      `${this.authProvider.config.baseUrl}/web/membership/index`,
      this.headers
    );
  }

  updateUser(updatedUser) {
    if (this.authProvider.config.debug) {
      return of({
        status: 1,
        data: {
          AccessToken: "accb45021c8be4550dd1e826aad388f0"
        }
      });
    }
    const headers = this.authProvider.config.headers;
    const params = new HttpParams();
    const options = {
      headers,
      params,
      withCredentials: true
    };
    return this.http.post(
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
    );
  }
}
