import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {InterceptedHttp} from './http.interceptor';
//import {DatepickerModule} from 'angular2-material-datepicker'

import {AppComponent} from './app.component';
import {LogOutComponent} from './web_components/sign_log/log-out/log-out.component';
import {LogInComponent} from './web_components/sign_log/log-in/log-in.component';
import {SingUpComponent} from './web_components/sign_log/sing-up/sing-up.component';
import {CreatTournmentComponent} from './web_components/game_components/tournment/creat-tournment/creat-tournment.component';
import {JoinTournmentComponent} from './web_components/game_components/tournment/join-tournment/join-tournment.component';
import {ListTeamComponent} from './web_components/game_components/team/list-team/list-team.component';
import {CreateTeamComponent} from './web_components/game_components/team/create-team/create-team.component';
import {UserProfileComponent} from './web_components/user-profile/user-profile.component';
import { AlertModule } from 'ngx-bootstrap';
import {DService} from './web_components/shared/data.srv';
import {httpFactory} from './http.factory';
import {Http, XHRBackend, RequestOptions} from '@angular/http';
import {TokenHolderServise} from './web_components/shared/tokenholder.srv';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerModule } from 'ngx-bootstrap';
import { CustomFormsModule } from 'ng2-validation';



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
        UserProfileComponent,


    ],
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        ReactiveFormsModule,
        DatepickerModule,
        CustomFormsModule,
        BrowserAnimationsModule,
        AlertModule.forRoot(),
        DatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
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
                component: CreatTournmentComponent
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
    providers: [
        {
            provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions, Router, TokenHolderServise]
        },

        DService,
        TokenHolderServise,
        LogOutComponent
    ],
    bootstrap: [AppComponent
    ]

})
export class AppModule {
}
