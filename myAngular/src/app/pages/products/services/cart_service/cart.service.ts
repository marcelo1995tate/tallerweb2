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
      this.products.push(product);
      this.cartSubject.next(this.products);
  }

  private quantityProducts(): void{
      const quantity = (this.products.length) ? this.products.length : 0 ;
      this.quantitySubject.next(quantity);
  }

  private calculateTotal(): void{
      const total = this.products.reduce((accumulator, prod) => accumulator += prod.PRECIO,0);
      this.totalSubject.next(total);
  }

  }