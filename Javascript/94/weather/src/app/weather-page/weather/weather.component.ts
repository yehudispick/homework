import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/shared/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input()
  weather: Weather;
}