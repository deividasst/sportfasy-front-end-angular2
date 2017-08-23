import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {AppComponent} from './app.component';
import {LogOutComponent} from './web_components/sign_log/log-out/log-out.component';
import {LogInComponent} from './web_components/sign_log/log-in/log-in.component';
import {SingUpComponent} from './web_components/sign_log/sing-up/sing-up.component';
import {CreatTournmentComponent} from './web_components/game_components/tournment/creat-tournment/creat-tournment.component';
import {ListTournmentComponent} from './web_components/game_components/tournment/list-tournment/list-tournment.component';
import {ListTeamComponent} from './web_components/game_components/team/list-team/list-team.component';
import {CreateTeamComponent} from './web_components/game_components/team/create-team/create-team.component';
import {DashboardComponent} from './web_components/dashboard/dashboard.component';
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
import { TournamentUserComponentComponent } from './web_components/game_components/tournment/tournament-user-component/tournament-user-component.component';
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
import { TeamPlayersComponent } from './web_components/game_components/team/team-players/team-players.component';
import {GridModule} from '@progress/kendo-angular-grid';
import {KendoUiSettings} from './web_components/shared/kendo-ui-settings.srv';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import { GridPlayerComponent } from './web_components/game_components/player/grid-player/grid-player.component';
import {GridTournamentsComponent} from './web_components/game_components/tournment/grid-tournaments/grid-tournaments.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { GridTeamsComponent } from './web_components/game_components/team/grid-teams/grid-teams.component';
import { UserProfileComponent } from './web_components/user-profile/user-profile.component';
import { TeamDialogComponent } from './web_components/game_components/team/team-dialog/team-dialog.component';
import {GridTeamPlayersComponent} from './web_components/game_components/team/grid-team-players/grid-team-players.component';
import {CountDown} from 'ng2-date-countdown'; //not sure
import { GridTeamPlayersSellComponent } from './web_components/game_components/team/grid-team-players-sell/grid-team-players-sell.component';
import { TournamentTeamComponentComponent } from './web_components/game_components/tournment/tournament-team-component/tournament-team-component.component';
import { TeamListGridComponent } from './web_components/game_components/tournment/team-list-grid/team-list-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    CountDown, //not sure
    LogOutComponent,
    LogInComponent,
    SingUpComponent,
    CreatTournmentComponent,
    ListTournmentComponent,
    ListTeamComponent,
    CreateTeamComponent,
      DashboardComponent,
    OverAllTeamsWidgetComponent,
    OverAllTournamentsWidgetComponent,
    HomeComponent,
    TournamentDialogComponent,
    TournamentUserComponentComponent,
    PopupComponent,
    NavbarComponent,
    TeamPlayersComponent,
    GridPlayerComponent,
    GridTournamentsComponent,
    GridTeamPlayersComponent,
    MainHeaderComponent,
    GridTeamsComponent,
    UserProfileComponent,
    TeamDialogComponent,
    GridTeamPlayersSellComponent,
    TournamentTeamComponentComponent,
    TeamListGridComponent,
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
        GridModule,
        DropDownsModule,
        AlertModule.forRoot(),
        DatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent,
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
                path: 'listtournment',
                component: ListTournmentComponent
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
                path: 'dashboard',
                component: DashboardComponent
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
        KendoUiSettings,
        TokenHolderServise,
        LogOutComponent,
        SecurityTrimming,
        TournamentUserComponentComponent,
        OverAllTournamentsWidgetComponent
    ],
    bootstrap: [AppComponent
    ],
    entryComponents: [
        TournamentDialogComponent,
        TeamDialogComponent,
        PopupComponent
    ]

})
export class AppModule {
}
