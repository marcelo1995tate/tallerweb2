import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/Services/Validation.service';
import { UsuarioService } from '../Services/Usuario.service';
import { Usuario } from "../Interfaces/Usuario.interface";

@Component({
  selector: 'recuperar-password',
  templateUrl: './RecPassword.component.html',
  styleUrls: ['./RecPassword.component.css']
})
export class RecPassComponent {

  recFormA: any;
  recFormB: any;
  mensajeRecupero: string;
  estado: string;

  constructor(protected router: Router, private _builder: FormBuilder, private _usuarioService: UsuarioService) {
    this.mensajeRecupero = ''
    this.estado = 'SOLI_EMAIL'
    this.recFormA = this._builder.group({
      email: ['', [Validators.required, ValidationService.emailValidator]]
    })
    this.recFormB = this._builder.group({
      password: ['', Validators.required],
      codigo: ['', Validators.required]
    })
  }

  solicitarCodigo() {
    let usuario: Usuario = this.recFormA.value;

    this._usuarioService.gestionarSesion(usuario, '/codigo-password').then((result) => {
      this.estado = 'REC_PASS'
    }, (error) => {
      this.mensajeRecupero = error.Message
    });
  }

  solicitarCambio() {

    let usuario: Usuario = this.recFormB.value;

    this._usuarioService.gestionarSesion(usuario, '/recupero-password').then((result) => {
      this.router.navigate(['/']);
    }, (error) => {
      this.mensajeRecupero = error.Message
    });

  }
}