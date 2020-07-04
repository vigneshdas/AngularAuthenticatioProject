import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  login(credentials){
    //{email: "vigneshdas3@gmail.com", password: "123456"}
    console.log(credentials);
    if(credentials.email == 'vigneshdas3@gmail.com' && credentials.password=='123')
      return true;
    else 
      return false
  }


}
