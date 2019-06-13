import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CategorySidebarComponent } from './food-menu/category-sidebar/category-sidebar.component';
import { GroupByPipe } from './food-menu/group-by.pipe';
import { CartComponent } from './food-menu/cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FoodMenuComponent,
    CategorySidebarComponent,
    GroupByPipe,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'checkout',
        component: CheckoutComponent,
        data: {
          title: 'Heroes List'
          }
      },
      {
        path: '',
        component: FoodMenuComponent
      }
    ],
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
