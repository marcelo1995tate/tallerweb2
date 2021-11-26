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
      name: ['', Validators.required] ,
      family_name: ['', Validators.required] ,
      address: ['', Validators.required] 
    })
  }

  registrar(values: string){
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