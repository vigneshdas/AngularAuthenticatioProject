import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean; 

  constructor(private router: Router , private authService : AuthServiceService , private route :ActivatedRoute ) { }

  signIn(credentials) {
    /**this.authService.login(credentials)
      .subscribe(result => { 
        if (result)
          this.router.navigate(['/']);
        else  
          this.invalidLogin = true; 
      });**/
    console.log("signIn Called")
    this.invalidLogin = this.authService.login(credentials)
    if (this.invalidLogin){
      console.log("validLogin")
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')
      console.log("returnUrl=")
      this.router.navigate([returnUrl || '/home']);
    } else  
        this.invalidLogin = true; 

          
    this.authService.isLoggedIn();  
  }
}
