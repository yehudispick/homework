import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherServerProps, Weather } from './weather';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }
  getWeather(zip: string): Observable<Weather> {
    return this.httpClient.get<WeatherServerProps>(`http://api.openweathermap.org/data/2.5/weather?appid=cb7c71219cf09eb0bb414b932669be97&zip=${zip}&units=imperial`)
      .pipe(map(weatherData =>(
        console.log(weatherData.weather[0].icon),{
        location: weatherData.name,
       
        icon:  `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
        description:  `${weatherData.main.temp} and ${weatherData.weather[0].description}`
      }

      )
    ));
  }
}
