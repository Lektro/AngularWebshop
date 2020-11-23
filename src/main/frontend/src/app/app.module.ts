import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularwebshopComponent } from './angularwebshop/angularwebshop.component';
import { ProductsComponent } from './angularwebshop/products/products.component';
import { OrdersComponent } from './angularwebshop/orders/orders.component';
import { ShoppingCartComponent } from './angularwebshop/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularwebshopComponent,
    ProductsComponent,
    OrdersComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
