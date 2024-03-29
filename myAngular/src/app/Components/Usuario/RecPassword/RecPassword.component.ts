import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/Services/Validation.service';
import { UsuarioService } from '../Services/Usuario.service';
import { Usuario } from "../Interfaces/Usuario.interface";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'recuperar-password',
  templateUrl: './RecPassword.component.html',
  styleUrls: ['./RecPassword.component.css']
})
export class RecPassComponent {

  recFormA: any;
  recFormB: any;
  mensajeRecupero: string;
  msgType: string;
  estado: string;

  constructor(protected router: Router, private _builder: FormBuilder, private _usuarioService: UsuarioService) {
    this.mensajeRecupero = ''
    this.estado = 'SOLI_EMAIL'
    this.recFormA = this._builder.group({
      email: ['', [Validators.required, ValidationService.emailValidator]]
    })
    this.recFormB = this._builder.group({
      password: ['', [Validators.required, ValidationService.passValidator, Validators.minLength(8)]],
      codigo: ['', Validators.required]
    })
  }

  solicitarCodigo() {
    let usuario: Usuario = this.recFormA.value;

    this._usuarioService.gestionarSesion(usuario, environment.API_BASE_URL + '/cognito/forgotPassword').then((result) => {
      this.mensajeRecupero = result.Message
      this.estado = 'REC_PASS'
      this.msgType = 'success'
    }, (error) => {
      this.mensajeRecupero = error.Message
      this.msgType = 'danger'
    });
  }

  solicitarCambio() {

    let usuario: Usuario = this.recFormB.value;
    usuario.email = this.recFormA.get('email').value;

    this._usuarioService.gestionarSesion(usuario, environment.API_BASE_URL + '/cognito/confirmNewPassword').then((result) => {
      alert(result.Message)
      this.router.navigate(['/']);
    }, (error) => {
      this.mensajeRecupero = error.Message
      this.msgType = 'danger'
    });

  }
}