import { Component, Input } from '@angular/core';
import Category from '../shared/category';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent{
  @Input()
  categories: Category[];
  selectedCategory = 0;

  

/*  selectCategory(selectCategory: number){
    this.selectedCategory = selectCategory
    console.log('cat', this.selectedCategory)
  }*/
  
}
