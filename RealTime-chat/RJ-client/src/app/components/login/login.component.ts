import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Response, Headers } from "@angular/http";
import { AuthService } from "../../service/auth.service";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password : ''
  };

  errors = {
    summary: null,
    email : null,
    password: null
  }


  constructor(private router: Router,
              private http: Http,
              private AuthService: AuthService) { }

  processForm() {
    const email = this.user.email;
    const password = this.user.password;
    const headers = new Headers( {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });
    const body = {
      email : this.user.email,
      password : this.user.password
    }

    this.http.post('/auth/login', body, {headers: headers}).toPromise()
                .then(response => {
                  if (response.status === 200) {
                    this.errors = {
                      summary: null,
                      email : null,
                      password: null
                    }
                    const json = response.json();
                    this.AuthService.authenticateUser(json.token, email, json.user.displayName, json.user.role);
                    this.router.navigate(['']);                   
                  } 
                }).catch((error:any) => {
                  console.log('Login failed');
                  const json = error.json();
                  this.errors = {
                    summary: json.message,
                    email : null,
                    password: null
                  }
                  console.log(error);
                });
  }
  ngOnInit() {
  }

}
