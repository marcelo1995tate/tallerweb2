import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Usuario/Login/login.component';
import { RegisterComponent } from './Components/Usuario/Register/register.component';
import {OrdersComponent} from "./pages/orders/orders.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products',
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)},
  {path: 'order', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }