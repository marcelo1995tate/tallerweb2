import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ValidationService } from 'src/app/Services/Validation.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: any;

  constructor(protected router:Router, private _builder: FormBuilder) { 
    this.loginForm = this._builder.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', Validators.required]
    })
  }

  registrar(){
    this.router.navigate(['/register'])
  }
  loguearse(){
    alert(this.loginForm.value.email);
  }
}