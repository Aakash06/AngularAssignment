import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FoodCart} from '../FoodCart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() foodCart: FoodCart[];
  @Input() totalPrice: number;
  @Output() EmptyFoodCart = new EventEmitter();
  EmptyCart() {
    this.foodCart = [];
    this.totalPrice = 0;
    this.EmptyFoodCart.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
