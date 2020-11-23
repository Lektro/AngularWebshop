import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs/internal/Subscription";
import {ProductOrders} from "../models/product-orders.model";
import {AngularwebshopService} from "../services/AngularwebshopService";

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

    constructor(private angularwebshopService: AngularwebshopService) {
    }

    ngOnInit() {
        this.productOrders = [];
        this.loadProducts();
        this.loadOrders();
    }

    addToCart(order: ProductOrder) {
        this.angularwebshopService.SelectedProductOrder = order;
        this.selectedProductOrder = this.angularwebshopService.SelectedProductOrder;
        this.productSelected = true;
    }

    removeFromCart(productOrder: ProductOrder) {
        let index = this.getProductIndex(productOrder.product);
        if (index > -1) {
            this.shoppingCartOrders.productOrders.splice(
                this.getProductIndex(productOrder.product), 1);
        }
        this.angularwebshopService.ProductOrders = this.shoppingCartOrders;
        this.shoppingCartOrders = this.angularwebshopService.ProductOrders;
        this.productSelected = false;
    }

    getProductIndex(product: Product): number {
        return this.angularwebshopService.ProductOrders.productOrders.findIndex(
            value => value.product === product);
    }

    isProductSelected(product: Product): boolean {
        return this.getProductIndex(product) > -1;
    }

    loadProducts() {
        this.angularwebshopService.getAllProducts()
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
        this.sub = this.angularwebshopService.OrdersChanged.subscribe(() => {
            this.shoppingCartOrders = this.angularwebshopService.ProductOrders;
        });
    }

    reset() {
        this.productOrders = [];
        this.loadProducts();
        this.angularwebshopService.ProductOrders.productOrders = [];
        this.loadOrders();
        this.productSelected = false;
    }
}
