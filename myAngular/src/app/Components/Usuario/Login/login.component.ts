import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';


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
  loguearse(values: any){
    const isResponseOk = (response:any) =>{
      if(!response.ok)
          console.log(response.status);
      return response.text();    
    }
  
    function showError(err:string){
      console.log('muestro error' , err);
    }

    let userJson = JSON.stringify(values);
  
    fetch('http://localhost:3000/cognito/sign-in',{
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
      window.location.href = "http://localhost:4200";
    })
    .catch(showError);
    }
  }