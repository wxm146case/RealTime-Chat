import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public authenticateUser(token, email, displayName, role):void {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('displayName', displayName);
    localStorage.setItem('role', role);
  }

  public isUserAuthenticated(): boolean{
    return localStorage.getItem('token') !== null;
  }

  public deauthenticateUser():void {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('displayName');
    localStorage.removeItem('role');
  }

  public getToken():String {
    return localStorage.getItem('token'); 
  }

  public getEmail():String {
    return localStorage.getItem('email');
  }

  public getDisplayName():String {
    return localStorage.getItem('displayName');
  }

  public getRole():String {
    return localStorage.getItem('role');
  }

}
