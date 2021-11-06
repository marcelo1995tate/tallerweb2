import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductComponent } from './product/product.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FontAwesomeModule,
  ]
})
export class ProductsModule { }
