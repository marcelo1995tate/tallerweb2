import { Injectable } from '@angular/core';
import {PRODUCTS} from "../mock-products";
import {Product} from "../interface/product.interface";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() : Observable<Product[]>{
    const products = of(PRODUCTS)
    return products;
  }
}
