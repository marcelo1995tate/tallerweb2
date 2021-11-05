import {Injectable} from "@angular/core";
import {Product} from "../../interface/product.interface";
import {Observable, Subject} from "rxjs";


@Injectable({
    providedIn:'root'
})

export class CartService{
  products: Product[] = [];

  private cartSubject = new Subject<Product[]>();
  private totalSubject = new Subject<number>();
  private quantitySubject = new Subject<number>();


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