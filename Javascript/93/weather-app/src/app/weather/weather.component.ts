import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Weather } from '../shared/weather';
import { Observable } from 'rxjs';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnChanges {
  @Input()
  zip: string

  weather: Observable<Weather>;

  constructor(private weatherService: WeatherService) { }


  ngOnChanges() {
    this.weather = this.weatherService.getWeather(this.zip);
  
  }

}
