import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { ControlMessagesComponent } from './shared/ControlMessage/ControlMessage.component';

import { ValidationService } from './Services/Validation.service';
import { UsuarioService } from './Components/Usuario/Services/Usuario.service';
import { RecPassComponent } from './Components/Usuario/RecPassword/RecPassword.component';
import { SessionHandlerService } from './Services/SessionHandler.service';
import { AddProductComponent } from './Components/Productos/add-product/add-product.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        CartComponent,
        OrdersComponent,
        AddProductComponent,
        RegisterComponent,
        LoginComponent,
        ControlMessagesComponent,
        RecPassComponent,
        AddProductComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [ValidationService, UsuarioService, SessionHandlerService],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }