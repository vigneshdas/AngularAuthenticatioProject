import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZSwicm9sZSI6ImFkbWluIn0.NwWdtq2ZSZ7srRLPw6b6EFP3yUKZd7ccJb8eXcRbHEY';

  login(credentials){
    //{email: "vigneshdas3@gmail.com", password: "123456"}
    console.log(credentials);
    if(credentials.email == 'vigneshdas3@gmail.com' && credentials.password=='123'){
      localStorage.setItem('token' , this.token);
      return true;
    }else 
      return false
  }

  isLoggedIn(){
    
    const helper = new JwtHelperService();
    let token = localStorage.getItem('token');

    if(!token) return false;

    const decodedToken = helper.decodeToken(token);
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);

    return !isExpired;
  }

  getAuthUserDetail(){
    let token = localStorage.getItem('token');
    return new JwtHelperService().decodeToken(token);
  }
}
