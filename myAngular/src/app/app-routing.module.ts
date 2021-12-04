import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Usuario/Login/login.component';
import { RegisterComponent } from './Components/Usuario/Register/register.component';
import {OrdersComponent} from "./Components/Productos/orders/orders.component";
import { RecPassComponent } from './Components/Usuario/RecPassword/RecPassword.component';
import { AddProductComponent } from './Components/Productos/add-product/add-product.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'recuperar-password', component: RecPassComponent},
  {path: '',
    loadChildren: () => import('./Components/Productos/products/products.module').then(m => m.ProductsModule)},
  {path: 'order', component: OrdersComponent},
  {path: 'create-product', component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }