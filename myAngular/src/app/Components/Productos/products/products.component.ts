import { Component, OnInit} from '@angular/core';
import { ProductsService } from "./services/product_service/products.service";
import {Product} from "./interface/product.interface";
import {CartService} from "./services/cart_service/cart.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products: Product[]) => this.products = products);
  }


  addToCart(product: Product) : void {
    console.log('Add to car', product);
    this.cartService.updateCart(product);
    this.cartService.cart$.pipe(tap( res => console.log(res)));
    console.log(this.cartService.products);
  }
}
