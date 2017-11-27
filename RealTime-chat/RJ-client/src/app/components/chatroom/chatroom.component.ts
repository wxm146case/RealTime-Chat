import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../../service/auth.service'
import { SocketService } from '../../service/socket.service';

import { Message } from '../../models/message.model';
import { User } from '../../models/user.model';
import { Http, Response, Headers } from "@angular/http";
import { Router } from "@angular/router";

const AVATAR_URL = 'https://api.adorable.io/avatars/285';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  user : User;
  users : String[] = [];
  userName :String = null;
  userRole : String = this.authService.getRole();
  adminRole : String = 'admin';
  messages: Message[] = [];
  messageContent: string;
  notices : string[] = [];
  ioConnection: any;


  constructor(private socketService: SocketService,
              private http: Http, 
              private authService: AuthService,
              private router : Router) { }

  ngOnInit() {
    const headers = new Headers( {
      'authorization': 'bearer ' + this.authService.getToken(),
    });
    this.http.post('/chatroom', {'status' : 'logged'}, {headers: headers}).toPromise()
                    .then((res) => {
                      const json = res.json();
                      console.log(json);
                    }).catch((error: any) => {
                      console.log(error);
                    })
    this.initIoConnection();
  }

  private initModel(): void {
    const randomId = this.getRandomId();
    this.userName = this.authService.getDisplayName();    
    this.user = {
      id: randomId,
      avatar: `${AVATAR_URL}/${randomId}.png`,
      name: this.userName,
    };
  }


  private initIoConnection(): void {
    this.initModel();
    this.socketService.init(this.userName);

    this.ioConnection  = this.socketService.onMessage()
      .subscribe((message: Message) => {
        this.messages.push(message);
      });

    this.socketService.onUserslist()
      .subscribe((usersList : string[]) => {
        this.users = usersList;
        this.users.push(this.userName);
        this.notices.push(this.userName + ' joined');
      });
    
    this.socketService.newUser()
      .subscribe((name : string) => {
        this.users.push(name);
        this.notices.push(name + ' joined');
      });

    this.socketService.loseUser()
      .subscribe((name : string) => {
        this.notices.push(name + ' left');
        var index = this.users.indexOf(name);
        this.users.splice(index, 1);
      });

    this.socketService.kickUser()
      .subscribe((displayName : string) => {
        this.notices.push('kick out ' + displayName);
        var index = this.users.indexOf(displayName);
        this.users.splice(index, 1);
      });

    this.socketService.onConnect()
      .subscribe(() => {
        console.log('onConnect');
      });

    this.socketService.onDisconnect()
      .subscribe(() => {
        console.log('onDisconnect');
      });
  }

  private getRandomId(): number {
    return Math.floor(Math.random() * (1000000)) + 1;
  }

  public sendMessage(message: string): void {
    if (!message) {
      return;
    }
    const headers = new Headers( {
      'authorization': 'bearer ' + this.authService.getToken(),
    });
    
    this.http.post('/chatroom', {'status' : 'logged'}, {headers: headers}).toPromise()
    .then((res) => {
      const json = res.json();
      console.log(json);
    }).catch((error: any) => {
      console.log(error);
    })

    let senddata : Message = {
      from: this.user,
      content: message
    }
    this.socketService.send(senddata);
    this.messages.push(senddata);
    this.messageContent = null;
    }

    public deleteUser(displayName: string): void {
      this.notices.push('kick out ' + displayName);
      var index = this.users.indexOf(displayName);
      this.users.splice(index, 1);
      this.socketService.deleteUser(displayName);

      const headers = new Headers( {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      });

      this.http.post('/auth/delete', {displayName : displayName}, {headers: headers}).toPromise()
      .then((res) => {
        const json = res.json();
        this.router.navigate(['/logout']); 
      }).catch((error: any) => {
        console.log(error);
      })
    }
  }

