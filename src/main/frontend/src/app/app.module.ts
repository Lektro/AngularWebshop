import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AngularWebshopComponent } from './angularwebshop/angularwebshop.component';
import { ProductsComponent } from './angularwebshop/products/products.component';
import { OrdersComponent } from './angularwebshop/orders/orders.component';
import { ShoppingCartComponent } from './angularwebshop/shopping-cart/shopping-cart.component';
import { AngularWebshopService } from "./angularwebshop/services/angularwebshopService";

@NgModule({
  declarations: [
    AppComponent,
    AngularWebshopComponent,
    ProductsComponent,
    OrdersComponent,
    ShoppingCartComponent
  ],
  imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
  ],
  providers: [AngularWebshopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
