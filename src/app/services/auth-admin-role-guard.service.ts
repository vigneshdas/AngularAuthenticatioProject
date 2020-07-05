import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminRoleGuardService implements CanActivate{

  constructor(private authservice :AuthServiceService , private router :Router) { }

  canActivate(){
    if(this.authservice.getAuthUserDetail().admin)
      return true;
    
    this.router.navigateByUrl('/permissionDeniend');
  }
}
