import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from '../models/message.model';

declare var io : any;

const SERVER_URL = 'http://localhost:3000';

@Injectable()
export class SocketService {
  socket : any;
  constructor() { }

  public init(): void {
    this.socket = io(SERVER_URL);
  }


  public send(message: Message):void {
    this.socket.emit('message', message);
  }



  onUserslist(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('init', (usersList) => {
        observer.next(usersList);
      });
    });
  }

  addUser(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('newUser', (name) => {
        observer.next(name);
      });
    });
  }

  loseUser(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('loseUser', (name) => {
        observer.next(name);
      });
    });
  }
  
  onMessage(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
    });
  }

  public onConnect(): Observable<any> {
    return new Observable(observer => {
        this.socket.on('connect', () => observer.next());
    });
}

  public onDisconnect(): Observable<any> {
    return new Observable(observer => {
        this.socket.on('disconnect', () => observer.next());
    });
}
}
