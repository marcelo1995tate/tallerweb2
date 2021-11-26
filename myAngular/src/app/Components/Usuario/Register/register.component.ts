import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/Services/Validation.service';
import { UsuarioService } from '../services/Usuario.service';

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

  registrarse(values: string) {
    const isResponseOk = (response:any) =>{
      if(!response.ok)
          console.log(response.status);
      return response.text();    
    }
  
    function showError(err:string){
      console.log('muestro error' , err);
    }

    let userJson = JSON.stringify(values);
  
    fetch('http://localhost:3000/cognito/sign-up',{
      headers: {'Content-Type' : 'application/json'},
      method: 'POST',
      body: userJson
    })
    .then(response => isResponseOk(response))
    .then(data =>{
      alert(data);
      if(!data.includes("Exception")){
        window.location.href = "http://localhost:4200/login";
      }
    })
    .catch(showError);
  }

}