import { Component, OnInit } from '@angular/core';

import { SocketService } from '../../service/socket.service';
import { Action } from '../../models/action';
import { Message } from '../../models/message.model';
import { User } from '../../models/user.model';

const AVATAR_URL = 'https://api.adorable.io/avatars/285';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  action = Action;
  user : User;
  users : string[];
  userName :string;
  messages: Message[] = [];
  messageContent: string;
  notices : string[] = [];
  ioConnection: any;


  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.initIoConnection();
    this.initModel();
  }

  private initModel(): void {
    const randomId = this.getRandomId(); 
    this.user = {
      id: randomId,
      avatar: `${AVATAR_URL}/${randomId}.png`,
      name: this.userName,
    };
  }


  private initIoConnection(): void {
    this.socketService.init();

    this.ioConnection  = this.socketService.onMessage()
      .subscribe((message: Message) => {
        this.messages.push(message);
      });

    this.socketService.onUserslist()
      .subscribe((usersList : string[]) => {
        this.users = usersList;
      });
    
    this.socketService.addUser()
      .subscribe((name : string) => {
        this.users.push(name);
        this.notices.push(name + ' joined');
      });

    this.socketService.loseUser()
      .subscribe((name : string) => {
        this.notices.push(name, ' left');
        var index = this.users.indexOf(name);
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
    let senddata : Message = {
      from: this.user,
      content: message,
      action: null
    }
    this.socketService.send(senddata);
    this.messages.push(senddata);
    
    this.messageContent = null;
    }

    public sendNotification(params: any, action: Action): void {
      let message: Message;
  
      if (action === Action.JOINED) {
        message = {
          from: this.user,
          content : null,
          action: action
        }
      }   
      this.socketService.send(message);
    }

  }

