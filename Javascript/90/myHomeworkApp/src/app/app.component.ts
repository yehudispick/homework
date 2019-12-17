import { Component } from '@angular/core';
import {PersonComponent} from './person/person.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'myHomeworkApp';
  person = {firstName: 'Donald', lastName: 'Trump', address: {street: '123 Anystreet', city: 'Anytown', zip: '12345'}};
  //address = {street: '123 Anystreet', city: 'Anytown', zip: '12345'}
}
