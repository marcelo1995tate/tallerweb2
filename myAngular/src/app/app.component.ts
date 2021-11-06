import { Component} from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  route:string = '';
  constructor(protected router:Router) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd == true){
        this.route = router.url
        console.log(this.route)
      } 
  });
  }

}
