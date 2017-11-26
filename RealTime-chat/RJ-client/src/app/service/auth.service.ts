import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public authenticateUser(token, email, displayName):void {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('displayName', displayName);
  }

  public isUserAuthenticated(): boolean{
    return localStorage.getItem('token') !== null;
  }

  public deauthenticateUser():void {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('displayName');
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

}
