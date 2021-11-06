import { Component, OnInit } from '@angular/core';
import { Product } from '../products/interface/product.interface';
import {CartService} from "../products/services/cart_service/cart.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  order: Product[] = [];

  constructor( private cartService: CartService) { }

  ngOnInit(): void {
  }

  total$ = this.cartService.total$;
  cart$ = this.cartService.cart$;

}
