import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LavaProvider } from '../../providers/lava/lava';
import { Observable } from 'rxjs/Observable';

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
  _book: any;
  done = false;
  sessions$: Observable<Object>;
  classes$: Observable<Object>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private lavaProvider: LavaProvider) {
    this._book = navParams.get('book');

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');

    console.log(this._book);
    this.classes$ = this.lavaProvider.getClasses();
    this.sessions$ = this.lavaProvider.getMassageReservations();
  }


  close() {
    this.navCtrl.pop();
  }

  book(){
    this.done = true;
    setTimeout(()=> {
      this.navCtrl.pop();
    }, 1800)
  }

}
