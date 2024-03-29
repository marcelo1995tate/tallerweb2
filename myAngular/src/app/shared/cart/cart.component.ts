import { Component, OnInit } from '@angular/core';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {CartService} from "../../Components/Productos/products/services/cart_service/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  faShoppingCart = faShoppingCart;

  quantity$ = this.cartService.quantity$;
  total$ = this.cartService.total$;
  cart$ = this.cartService.cart$;

}
