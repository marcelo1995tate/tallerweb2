import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/Services/Validation.service';
import { UsuarioService } from '../Services/Usuario.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  registerForm: any;

  constructor(private _builder: FormBuilder, private usuarioService: UsuarioService) {

    this.registerForm = this._builder.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passValidator, Validators.minLength(8)]],
      nombre: ['', [Validators.required, ValidationService.textValidator]],
      apellido: ['', [Validators.required, ValidationService.textValidator]],
      direccion: ['', [Validators.required]]
    })

  }

  registrarse() {
    //console.log(this.usuarioService.loguearUsuario);
  }

}