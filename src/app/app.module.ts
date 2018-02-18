import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { HttpClientModule } from "@angular/common/http";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyApp } from "./app.component";

import { HomePage } from "../pages/home/home";
import { PersonPage } from "../pages/person/person";
import { StarPage } from "../pages/star/star";
import { HeartPage } from "../pages/heart/heart";
import { AddPage } from "../pages/add/add";

import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { LoginPage } from "../pages/login/login";
import { AuthenticationProvider } from "../providers/authentication/authentication";

@NgModule({
  declarations: [
    MyApp,
    PersonPage,
    StarPage,
    HeartPage,
    AddPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpClientModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PersonPage,
    StarPage,
    HeartPage,
    AddPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthenticationProvider,

  ]
})
export class AppModule {}
