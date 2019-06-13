import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { FoodItems } from './FoodItems';
import { FoodCart } from './FoodCart';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  foodItems: FoodItems[];
  foodCart: FoodCart[] = [];
  totalPrice = 0;
  AddItem(foodDetail: FoodItems) {
    let check = 0;
    for (const item in this.foodCart) {
      if (this.foodCart[item].name === foodDetail.name) {
        check = 1;
        this.totalPrice += foodDetail.price;
        this.foodCart[item].quantity += 1;
        break;
      }
    }
    if (check === 0) {
      const item = {name: foodDetail.name, price: foodDetail.price, quantity: 1 };
      //const item = new FoodCart(foodDetail.name, foodDetail.price, 1);
      this.totalPrice += foodDetail.price;
      this.foodCart.push(item);
    }
  }
  DeleteItem(foodDetail: FoodItems) {
    for (const foodCartItem of this.foodCart) {
      if (foodCartItem.name === foodDetail.name) {
        foodCartItem.quantity -= 1;
        this.totalPrice -= foodDetail.price;
        this.foodCart = this.foodCart.filter((item: FoodCart) => {
          return item.quantity !== 0;
        });
        break;
      }
    }
  }
  CheckTimeAvailability(availableTime: string): Boolean {
    const currentTimeHours = new Date().getHours() ;
    const currentTimeMinutes = new Date().getMinutes() ;
    const time = availableTime.split('-');
    const startTime = time[0].split(':');
    const endTime = time[1].split(':');
    if (+startTime[0] > currentTimeHours || +endTime[0] < currentTimeHours) {
      return false;
    } else if ((+startTime[0] === currentTimeHours && +startTime[1] > currentTimeMinutes) ||
      (+endTime[0] === currentTimeHours && +endTime[1] < currentTimeMinutes) ) {
      return false;
    } else {
      return true;
    }
  }
  EmptyCart() {
    this.foodCart = [];
    this.totalPrice = 0;
  }
  constructor( private configService: ConfigService) { }
  ngOnInit() {
    this.configService.getJson().subscribe((data: FoodItems[]) => {
      this.foodItems = data;
    });

  }
}
