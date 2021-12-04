import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionHandlerService } from 'src/app/Services/SessionHandler.service';
import { Product } from '../products/interface/product.interface';
import { CartService } from "../products/services/cart_service/cart.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  order: Product[] = [];
  mensaje: string="";
  total$ = this.cartService.total$;
  cart$ = this.cartService.cart$;

  constructor(private cartService: CartService, private router: Router) {
    if (!SessionHandlerService.enSesion()){
      this.router.navigate(['/login']);
      return;
    }

    this.total$ = this.cartService.total$;
    this.cart$ = this.cartService.cart$;
  }

  comprar(){
    this.mensaje = "Cargando compra"
    this.cartService.comprar().then((result) => {
      this.mensaje = result
    }, (error) => {
      console.log(error)
      this.mensaje = error
    });
  }
}
