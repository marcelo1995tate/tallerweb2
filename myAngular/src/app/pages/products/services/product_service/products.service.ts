import {Injectable} from '@angular/core';
import {Product} from "../../interface/product.interface";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API_URL = '/products/mostar-todos';

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.API_URL);
  }
}
