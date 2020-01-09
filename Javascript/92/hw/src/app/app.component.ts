import { Component } from '@angular/core';
import Category from './shared/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Electronics';

  categories: Category[] = [{
        name:'Memory Cards', 
        items:[
          {name: 'Samsung 8 GB', price: 9.99},
          {name: 'Sandisk 64 GB', price: 19.99},
          {name: 'Sandisk 128 GB', price: 60.99}
        ]
      },
      {
        name:'Audio', 
        items:[
          {name: 'Headphones', price: 30.99},
          {name: 'Speakers', price: 44.99},
          {name: 'Bluetooth speakers', price: 64.99}
        ]
      },
      {
        name:'Drones', 
        items:[
          {name: 'Toy Helicopter', price: 49.99},
          {name: 'Camara drone', price: 244.99}        
        ]
      },
      {
        name:'Phones', 
      }
    ];
     
    
  }

 