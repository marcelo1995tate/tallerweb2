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

import { ControlMessagesComponent } from './shared/ControlMessage/ControlMessage.component';

import { ValidationService } from './Services/Validation.service';
import { UsuarioService } from './Components/Usuario/Services/Usuario.service';
import { RecPassComponent } from './Components/Usuario/RecPassword/RecPassword.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CartComponent,
        OrdersComponent,
        RegisterComponent,
        LoginComponent,
        ControlMessagesComponent,
        RecPassComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [ValidationService, UsuarioService],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }