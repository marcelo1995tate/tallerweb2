import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OrdersComponent} from "../pages/orders/orders.component";


const routes: Routes = [
  {path: 'products',
    loadChildren: () => import('../pages/products/products.module').then(m => m.ProductsModule)},
  {path: 'order', component: OrdersComponent}
  //{path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
