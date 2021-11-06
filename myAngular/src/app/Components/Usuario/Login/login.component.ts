import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  signinForm: FormGroup;

  constructor(protected router:Router, private _builder: FormBuilder) { 
    this.signinForm = this._builder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  registrar(){
    this.router.navigate(['/register'])
  }

  signin(values: any){
    console.log(values);
  }


}