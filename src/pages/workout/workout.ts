import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html',
})
export class WorkoutPage {
  workout;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.workout = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutPage');
  }

}
