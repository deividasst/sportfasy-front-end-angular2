<<<<<<< HEAD
import { Component, OnInit, Inject} from '@angular/core';
import { OverAllTournamentsWidgetComponent } from '../over-all-tournaments-widget/over-all-tournaments-widget.component'
import {MD_DIALOG_DATA} from '@angular/material';
import {TournamentUserlistComponentComponent} from '../tournament-userlist-component/tournament-userlist-component.component';
import {DService} from '../../../shared/data.srv';
import {Tournament} from '../../../shared/Tournament';
import {SecurityTrimming} from '../../../shared/security-trimming.srv';


@Component({
  selector: 'app-tournament-dialog',
    templateUrl: './tournament-dialog.component.html',
  styleUrls: ['./tournament-dialog.component.sass']
})

export class TournamentDialogComponent implements OnInit {
    users: any;
    view: any;
    is_allowed: boolean;
    master: object;

    constructor(@Inject(MD_DIALOG_DATA) public data: any, private ds: DService,
                private securityTrimm: SecurityTrimming) {
        this.users = data._users;
        console.log(JSON.stringify({data: data._tournament_master.name}, null, 4));
        this.is_allowed = this.securityTrimm.isAllowedMasterRights(data._id);
        this.view = data._user;
    }

    ngOnInit() {

    }
}

=======
import { Component, OnInit, Inject} from '@angular/core';
import { OverAllTournamentsWidgetComponent } from '../over-all-tournaments-widget/over-all-tournaments-widget.component'
import {MD_DIALOG_DATA} from '@angular/material';
import {TournamentUserlistComponentComponent} from '../tournament-userlist-component/tournament-userlist-component.component';
import {DService} from '../../../shared/data.srv';
import {Tournament} from '../../../shared/Tournament';
import {SecurityTrimming} from '../../../shared/security-trimming.srv';


@Component({
  selector: 'app-tournament-dialog',
    templateUrl: './tournament-dialog.component.html',
  styleUrls: ['./tournament-dialog.component.sass']
})

export class TournamentDialogComponent implements OnInit {
    users: any;
    view: any;
    is_allowed: boolean;
    master: object;

    constructor(@Inject(MD_DIALOG_DATA) public data: any, private ds: DService,
                private securityTrimm: SecurityTrimming) {
        this.users = data._users;
        console.log(JSON.stringify({data: data._tournament_master.name}, null, 4));
        this.is_allowed = this.securityTrimm.isAllowedMasterRights(data._id);
        this.view = data._user;
    }

    ngOnInit() {

    }
}

>>>>>>> 587cdac7a0dc4f56f9217caa81a799a70f7ca327
