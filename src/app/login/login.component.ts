import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean; 

  constructor(private router: Router , private authService : AuthServiceService ) { }

  signIn(credentials) {
    /**this.authService.login(credentials)
      .subscribe(result => { 
        if (result)
          this.router.navigate(['/']);
        else  
          this.invalidLogin = true; 
      });**/
      this.invalidLogin = this.authService.login(credentials)
      if (this.invalidLogin)
      this.router.navigate(['/home']);
      else  
          this.invalidLogin = true; 
        
  }
}
