import {Component, OnInit} from '@angular/core';
import {ProductOrder} from "../models/product-order.model";
import {Subscription} from "rxjs/internal/Subscription";
import {ProductOrders} from "../models/product-orders.model";
import {AngularWebshopService} from "../services/AngularWebshopService";
import {Product} from "../models/product-model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    productOrders: ProductOrder[] = [];
    products: Product[] = [];
    selectedProductOrder: ProductOrder;
    private shoppingCartOrders: ProductOrders;
    productSelected: boolean = false;

    constructor(private angularWebshopService: AngularWebshopService) {
    }

    ngOnInit() {
        this.productOrders = [];
        this.loadProducts();
        this.loadOrders();
    }

    addToCart(order: ProductOrder) {
        this.angularWebshopService.SelectedProductOrder = order;
        this.selectedProductOrder = this.angularWebshopService.SelectedProductOrder;
        this.productSelected = true;
    }

    removeFromCart(productOrder: ProductOrder) {
        let index = this.getProductIndex(productOrder.product);
        if (index > -1) {
            this.shoppingCartOrders.productOrders.splice(
                this.getProductIndex(productOrder.product), 1);
        }
        this.angularWebshopService.ProductOrders = this.shoppingCartOrders;
        this.shoppingCartOrders = this.angularWebshopService.ProductOrders;
        this.productSelected = false;
    }

    getProductIndex(product: Product): number {
        return this.angularWebshopService.ProductOrders.productOrders.findIndex(
            value => value.product === product);
    }

    isProductSelected(product: Product): boolean {
        return this.getProductIndex(product) > -1;
    }

    loadProducts() {
        this.angularWebshopService.getAllProducts()
            .subscribe(
                (products: any[]) => {
                    this.products = products;
                    this.products.forEach(product => {
                        this.productOrders.push(new ProductOrder(product, 0));
                    })
                },
                (error) => console.log(error)
            );
    }

    loadOrders() {
        this.sub = this.angularWebshopService.OrdersChanged.subscribe(() => {
            this.shoppingCartOrders = this.angularWebshopService.ProductOrders;
        });
    }

    reset() {
        this.productOrders = [];
        this.loadProducts();
        this.angularWebshopService.ProductOrders.productOrders = [];
        this.loadOrders();
        this.productSelected = false;
    }
}
