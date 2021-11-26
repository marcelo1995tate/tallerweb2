import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from "./shared/header/header.component";
import { CartComponent } from './shared/cart/cart.component';
import { OrdersComponent } from './Components/Productos/orders/orders.component';
import { LoginComponent } from './Components/Usuario/Login/login.component';
import { RegisterComponent } from './Components/Usuario/Register/register.component';
import {FooterComponent} from "./shared/footer/footer.component";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        CartComponent,
        OrdersComponent,
        RegisterComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }