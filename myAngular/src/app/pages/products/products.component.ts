import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./services/products.service";
import {Product} from "./interface/product.interface";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{
    this.productsService.getProducts()
        .subscribe(products => this.products = products);
  }

}
