import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Response, Headers } from "@angular/http";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  user = {
    email: '',
    password : '',
    confirm_password: '',
    displayName : ''
  };

  errors = {
    summary: null,
    email : null,
    displayName : null,
    password: null
  }

  constructor(private router: Router, private http: Http) { }

  processForm() {  
        const email = this.user.email;
        const password = this.user.password;
        const confirm_password = this.user.confirm_password;
        const displayName = this.user.displayName;
    
        console.log('email:', email);
        console.log('password:', password);
        console.log('confirm_password:', confirm_password);
        console.log('displayName:', displayName);

        if(password !== confirm_password) {
          return;
        }

        const headers = new Headers( {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        });
    
        this.http.post('/localhost:3000/auth/signup', {
          email : this.user.email,
          password : this.user.password,
          displayName : this.user.displayName
        }, {headers: headers}).toPromise()
                              .then(response => {
                                if (response.status === 200) {
                                  this.errors = {
                                    summary: null,
                                    email : null,
                                    displayName : null,
                                    password: null
                                  }
                                  this.router.navigate(['/login']);                                  
                                } else {
                                  console.log('Signup failed.');
                                  response.json().then(json => {
                                    console.log(json);
                                    const errors = json.errors ? json.errors : {};
                                    errors.summary = json.message;
                                  });
                                }
                              });
        }

  ngOnInit() {
  }

}
