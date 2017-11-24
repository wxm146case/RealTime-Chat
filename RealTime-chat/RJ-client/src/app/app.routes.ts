import { NgModule } from '@angular/core';
import { Routes,CanActivate, RouterModule } from '@angular/router';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';

const routes: Routes = [
    {
        path:'',
        redirectTo:'chatroom',
        pathMatch:'full'
    },
    {
        path:'chatroom',
        component : ChatroomComponent, canActivate:[ AuthGuard ]
    },
    {
        path: 'Login', 
        component : LoginComponent
      },
      {
        path: 'Signup', 
        component : SignComponent
      },
      {
        path: '**', 
        redirectTo: 'chatroom'
      }
    ];

export const routing = RouterModule.forRoot(routes);
