import { Component } from '@angular/core';
import { Order } from 'src/shared/order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Order';

  order: Order = {
    person:{
      firstName: 'Donald',
      lastName: 'Trump',
      address:{
        street: '1600 Pennsylvania Ave',
        city: 'Washington',
        state: 'DC',
        zip: '11228'
      },  
    },
    date: '1/12/2020',
    item:{
      name: 'Crispy Chicken Cutlet on a Baguette',
      description: 'Lettuce, tomato and Special Sauce. On a Baguette.',
      price: '11.99'
    }
  }

}
