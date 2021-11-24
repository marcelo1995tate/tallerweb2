import {Injectable} from "@angular/core";
import {Product} from "../../interface/product.interface";
import {BehaviorSubject, Observable} from "rxjs";


@Injectable({
    providedIn:'root'
})

export class CartService{
  products: Product[] = [];

  private cartSubject = new BehaviorSubject<Product[]>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  private quantitySubject = new BehaviorSubject<number>(0);


  get total$(): Observable<number>{
      return this.totalSubject.asObservable();
  }

  get quantity$(): Observable<number>{
      return this.quantitySubject.asObservable();
  }

  get cart$(): Observable<Product[]>{
      return this.cartSubject.asObservable();
  }

  public updateCart(product:Product): void{
      this.addToCart(product);
      this.quantityProducts();
      this.calculateTotal();
  }

  private addToCart(product:Product): void{
      const isProductInCar = this.products.find(({ ID_PRODUCTO }) => ID_PRODUCTO === product.ID_PRODUCTO);

      if(isProductInCar){
          isProductInCar.CANTIDAD += 1;
      }else{
          this.products.push({...product, CANTIDAD:1})
      }

      this.cartSubject.next(this.products);
  }

  private quantityProducts(): void{
      const quantity = this.products.reduce((accumulator, prod) => accumulator += prod.CANTIDAD,0);
      this.quantitySubject.next(quantity);
  }

  private calculateTotal(): void{
      const total = this.products.reduce((accumulator, prod) => accumulator += (prod.PRECIO * prod.CANTIDAD),0);
      this.totalSubject.next(total);
  }

  }