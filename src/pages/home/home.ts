import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  location:{
    city:string,
    state:string
  }
  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {

  }

  ionViewWillEnter() {
    this.location = {
      city: 'alexandria',
      state: 'Egypt'
    }

    this.weatherProvider.getWeather(this.location.city, this.location.state).subscribe(
      weather => {
        this.weather = weather.current_observation;
      }
    )
  }

}
