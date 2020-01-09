import { Component, Input } from '@angular/core';
import Category from '../shared/category';
import Item from '../shared/item';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input()
  items: Item[]
  

}
