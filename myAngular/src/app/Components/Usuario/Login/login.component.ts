import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/Services/Validation.service';
import { UsuarioService } from '../Services/Usuario.service';
import { Usuario } from "../Interfaces/Usuario.interface";
import { faAlgolia } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: any;
  mensajeLogin: string;

  constructor(protected router: Router, private _builder: FormBuilder, private _usuarioService: UsuarioService) {
    this.mensajeLogin = ''
    this.loginForm = this._builder.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', Validators.required]
    })
  }

  loguearse() {
    let usuario: Usuario = this.loginForm.value;

    this._usuarioService.loguearUsuario(usuario).then((result) => {
      if (result.IdToken.length == 0) {
        this.mensajeLogin = result.Message
      }
      else {
        document.cookie = `SSID=${result.IdToken}`;
        this.router.navigate(['/']);
      }

    }, (error) => {
      this.mensajeLogin = error.Message
    });
  }
}