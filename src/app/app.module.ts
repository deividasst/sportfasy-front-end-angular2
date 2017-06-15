import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LogOutComponent } from './web_components/sign_log/log-out/log-out.component';
import { LogInComponent } from './web_components/sign_log/log-in/log-in.component';
import { SingUpComponent } from './web_components/sign_log/sing-up/sing-up.component';
import { CreatTournmentComponent } from './web_components/game_components/tournment/creat-tournment/creat-tournment.component';
import { JoinTournmentComponent } from './web_components/game_components/tournment/join-tournment/join-tournment.component';
import { ListTeamComponent } from './web_components/game_components/team/list-team/list-team.component';
import { CreateTeamComponent } from './web_components/game_components/team/create-team/create-team.component';
import { UserProfileComponent } from './web_components/user-profile/user-profile.component';
import {DService} from './web_components/shared/data.srv';

@NgModule({
  declarations: [
    AppComponent,
    LogOutComponent,
    LogInComponent,
    SingUpComponent,
    CreatTournmentComponent,
    JoinTournmentComponent,
    ListTeamComponent,
    CreateTeamComponent,
    UserProfileComponent


  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
     {
       path: 'logout',
       component: LogOutComponent
     },
     {
       path: 'login',
       component: LogInComponent
     },
     {
       path: 'singup',
       component: SingUpComponent
     },
     {
       path: 'createtournment',
       component: CreateTeamComponent
     },
     {
       path: 'jointournment',
       component: JoinTournmentComponent
     },
     {
       path: 'listteam',
       component: ListTeamComponent
     },
     {
       path: 'creatteam',
       component: CreateTeamComponent
     },
     {
       path: 'userprofile',
       component: UserProfileComponent
     }
   ])
  ],
  providers: [DService],
  bootstrap: [AppComponent]
})
export class AppModule { }
