import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  validLogin: boolean; 

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
    this.validLogin = this.authService.login(credentials)
    if (this.validLogin){
      console.log("validLogin")
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')
      console.log("returnUrl="+returnUrl)
      this.router.navigate([returnUrl || '/home']);
    } else  
        this.validLogin = false; 

          
    this.authService.isLoggedIn();  
  }
}
