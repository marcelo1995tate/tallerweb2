import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  
  signupForm: FormGroup;
  
  constructor(private _builder: FormBuilder){
    this.signupForm = this._builder.group({
      email: ['', Validators.required] ,
      password: ['', Validators.required] ,
      nombre: ['', Validators.required] ,
      apellido: ['', Validators.required] ,
      direccion: ['', Validators.required] 
    })
  }

  enviar(values: any){
    console.log(values);
  }
  
}