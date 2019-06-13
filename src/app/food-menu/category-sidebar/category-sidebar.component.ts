import {Component, Input, OnInit} from '@angular/core';
import {FoodItems} from '../FoodItems';

@Component({
  selector: 'app-category-sidebar',
  templateUrl: './category-sidebar.component.html',
  styleUrls: ['./category-sidebar.component.css']
})
export class CategorySidebarComponent implements OnInit {
  @Input() foodItems: FoodItems[];
  constructor() { }
  ngOnInit() {
  }

}
