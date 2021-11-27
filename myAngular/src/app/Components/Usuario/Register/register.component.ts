import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/Services/Validation.service';
import { Usuario } from '../Interfaces/Usuario.interface';
import { UsuarioService } from '../Services/Usuario.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  registerForm: any;
  mensajeRegister: string;
  errorType:string;

  constructor(protected router: Router,private _builder: FormBuilder, private usuarioService: UsuarioService) {
    this.mensajeRegister = ''
    this.registerForm = this._builder.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passValidator, Validators.minLength(8)]],
      nombre: ['', [Validators.required, ValidationService.textValidator]],
      apellido: ['', [Validators.required, ValidationService.textValidator]],
      direccion: ['', [Validators.required]]
    })

  }

  registrarse() {
    let usuario: Usuario = this.registerForm.value;

    this.usuarioService.gestionarSesion(usuario, '/register').then((result) => { 
        this.mensajeRegister = result.Message ;
        this.errorType= "success";
    }, (error) => {
      this.mensajeRegister = error.Message
      this.errorType= "danger";
    });
  }

}