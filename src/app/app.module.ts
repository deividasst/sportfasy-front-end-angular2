import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {InterceptedHttp} from './http.interceptor';

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
import { DatepickerModule } from 'ngx-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import {MaterialModule, MdNativeDateModule} from '@angular/material';
import { OverAllTeamsWidgetComponent } from './web_components/game_components/team/over-all-teams-widget/over-all-teams-widget.component';
import { OverAllTournamentsWidgetComponent } from './web_components/game_components/tournment/over-all-tournaments-widget/over-all-tournaments-widget.component';
import { HomeComponent } from './web_components/home/home.component';
import { TournamentDialogComponent } from './web_components/game_components/tournment/tournament-dialog/tournament-dialog.component';
import { TournamentUserlistComponentComponent } from './web_components/game_components/tournment/tournament-userlist-component/tournament-userlist-component.component';
import { PopupComponent } from './popup/popup.component';
import {SecurityTrimming} from './web_components/shared/security-trimming.srv';
// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { NavbarComponent } from './navbar/navbar.component';

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
    OverAllTeamsWidgetComponent,
    OverAllTournamentsWidgetComponent,
    HomeComponent,
    TournamentDialogComponent,
    TournamentUserlistComponentComponent,
    PopupComponent,
    NavbarComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        ReactiveFormsModule,
        DatepickerModule,
        CustomFormsModule,
        DialogModule,
        BrowserAnimationsModule,
        ButtonsModule,
        IntlModule,
        DateInputsModule,
        MaterialModule,
        MdNativeDateModule,
        AlertModule.forRoot(),
        DatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent
            },
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
        LogOutComponent,
        SecurityTrimming
    ],
    bootstrap: [AppComponent
    ],
    entryComponents: [
        TournamentDialogComponent,
        PopupComponent
    ]

})
export class AppModule {
}

