import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  done = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }


  close() {
    this.navCtrl.pop();
  }

  book(){
    this.done = true;

    setTimeout(()=> {
      this.navCtrl.pop();
    }, 800)
  }

}
