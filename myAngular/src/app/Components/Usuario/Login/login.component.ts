import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(protected router:Router) { }

  registrar(){
    this.router.navigate(['/register'])
  }
  loguearse(data: any){
    alert(data.email);
  }
}