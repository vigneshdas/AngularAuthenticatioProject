import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router : Router , private autheService : AuthServiceService) { }
  //Step 1
  /**canActivate(){
      console.log("canActivate() called" +this.autheService.isLoggedIn())
      if(this.autheService.isLoggedIn())
        return true;

        this.router.navigateByUrl('/login');
        return false;
  }**/

  /**
   * Now lets say user logged in with URL http://localhost:4200/admin
   * If user not loged in then code is bnavigating to Login Page
   * So once loged in it will again navigate to Home and not to the URL pasted by User i.e. admin in this case
   * 
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log("canActivate() called" +this.autheService.isLoggedIn())
    if(this.autheService.isLoggedIn())
      return true;
      console.log("state.url==="+state.url)
      this.router.navigate(['/login'],{queryParams : {returnUrl : state.url }});
      return false;
}
}
