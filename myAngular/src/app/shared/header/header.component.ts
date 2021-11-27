import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { SessionHandlerService } from 'src/app/Services/SessionHandler.service';

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
    this.router.navigate(['/'])
  }
  
  public cerrarSesion(){
    SessionHandlerService.cleanSession();
    this.router.navigate(['/'])
  }

  enSesion() : boolean {
    return SessionHandlerService.enSesion();
  }
}
