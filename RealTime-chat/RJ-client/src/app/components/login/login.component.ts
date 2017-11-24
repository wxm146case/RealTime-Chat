import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Response, Headers } from "@angular/http";
import { AuthService } from "../../service/auth.service";

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

    console.log('email:', email);
    console.log('password', password);

    const headers = new Headers( {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });

    this.http.post('/localhost:3000/auth/login', {
      email : this.user.email,
      password : this.user.password
    }, {headers: headers}).toPromise()
                .then(response => {
                  if (response.status === 200) {
                    this.errors = {
                      summary: null,
                      email : null,
                      password: null
                    }
                    response.json().then(json => {
                      console.log(json);
                      this.AuthService.authenticateUser(json.token, email, json.displayName);
                      this.router.navigate(['']);
                    });
                  } else {
                    console.log('Login failed.');
                    response.json().then(json => {
                      const errors = json.errors ? json.errors : {};
                      errors.summary = json.message;
                    });
                  }
                });
  }
  ngOnInit() {
  }

}
