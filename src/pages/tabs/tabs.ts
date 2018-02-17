import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { PersonPage } from '../person/person';
import { StarPage } from '../star/star';
import { HeartPage } from '../heart/heart';
import { AddPage } from '../add/add';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PersonPage;
  tab3Root = StarPage;
  tab4Root = HeartPage;
  tab5Root = AddPage;

  constructor() {



  }
}
