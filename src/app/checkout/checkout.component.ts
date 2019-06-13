import {Component, Input, OnInit} from '@angular/core';
import {FoodCart} from '../food-menu/FoodCart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input() foodCart: FoodCart[];
  @Input() totalPrice: number;
  constructor() { }

  ngOnInit() {
  }

}
