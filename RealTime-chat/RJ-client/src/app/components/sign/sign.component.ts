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
    
        

        if(password !== confirm_password) {
          return;
        }

        const headers = new Headers( {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        });
        
        return this.http.post('/auth/signup', {
          email : email,
          password : password,
          displayName : displayName
        }, {headers: headers}).toPromise()
                              .then(response => {
                                if (response.status === 200) {
                                  console.log('Signup succeed.');
                                  this.errors = {
                                    summary: null,
                                    email : null,
                                    displayName : null,
                                    password: null
                                  }
                                  this.router.navigate(['/login']);                                 
                                } 
                              }).catch((error:any) => {
                                console.log('Signup failed.');
                                const json = error.json();
                                this.errors = json.errors ? json.errors : {
                                  summary: null,
                                  email : null,
                                  displayName : null,
                                  password: null
                                };
                                this.errors.summary = json.message;                                
                                console.log(error);
                              });
        }

        
  ngOnInit() {
  }

}
