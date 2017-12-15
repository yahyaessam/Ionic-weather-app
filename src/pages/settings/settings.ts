import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city:String;
  state:String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('location').then((val) => {
      if ((val) != null) {
        let location = JSON.parse(val);
        this.city = location.city;
        this.state = location.state;
      } else {
        this.city = "Alexandria";
        this.state = "Egypt";
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  saveForm() {
    let location = {
      city:this.city,
      state:this.state
    }
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
    console.log(location);
  }

}
