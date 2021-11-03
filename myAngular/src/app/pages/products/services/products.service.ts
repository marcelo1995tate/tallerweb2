import {Injectable} from '@angular/core';
import {PRODUCTS} from "../mock-products";
import {Product} from "../interface/product.interface";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API_URL = '';

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]>{
    return of(PRODUCTS);
  }
}
