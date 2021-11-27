import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToOrderPage(): void{
    this.router.navigate(['/order']);
  }

  goToProductsPage(): void {
    this.router.navigate(['/products'])
  }
  
  cerrarSesion(){
    console.log("adiosito");
  }

  enSesion() : boolean {
    const value = `; ${document.cookie}`;
    const parts = value.split("; SSID=");

    if (parts.length === 2) return true
    return false
  }
}
