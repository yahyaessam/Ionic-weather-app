import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherProvider {

 apiKey = "43194c82d27c92e4";
 url:string;

  constructor(public http: Http) {
    this.url = "http://api.wunderground.com/api/"+this.apiKey+"/conditions/q";
    console.log(this.url);
  }

autoWeather(){
  return this.http.get("http://api.wunderground.com/api/43194c82d27c92e4/geolookup/q/autoip.json").map( res => res.json());
}
getWeather(city, state) {
  return this.http.get(this.url+"/"+state+"/"+city+".json").map(res => res.json());
}

}
