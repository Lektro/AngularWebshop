import {Component, OnInit} from '@angular/core';
import {ProductOrders} from "../models/product-orders.model";
import {Subscription} from "rxjs/internal/Subscription";
import {AngularWebshopService} from "../services/AngularWebshopService";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    orders: ProductOrders;
    total: number;
    paid: boolean;
    sub: Subscription;

    constructor(private angularWebshopService: AngularWebshopService) {
        this.orders = this.angularWebshopService.ProductOrders;
    }

    ngOnInit() {
        this.paid = false;
        this.sub = this.angularWebshopService.OrdersChanged.subscribe(() => {
            this.orders = this.angularWebshopService.ProductOrders;
        });
        this.loadTotal();
    }

    pay() {
        this.paid = true;
        this.angularWebshopService.saveOrder(this.orders).subscribe();
    }
}
