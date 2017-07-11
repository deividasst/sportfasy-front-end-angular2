import { Component, OnInit, Inject} from '@angular/core';
import { OverAllTournamentsWidgetComponent } from '../over-all-tournaments-widget/over-all-tournaments-widget.component'
import {MD_DIALOG_DATA} from '@angular/material';
import {TournamentUserlistComponentComponent} from '../tournament-userlist-component/tournament-userlist-component.component';
import {DService} from '../../../shared/data.srv';
import {Tournament} from "../../../shared/Tournament";
import {SecurityTrimming} from "../../../shared/security-trimming.srv";


@Component({
  selector: 'app-tournament-dialog',
    templateUrl: './tournament-dialog.component.html',
  styleUrls: ['./tournament-dialog.component.sass']
})

export class TournamentDialogComponent implements OnInit {
    users: any;
    is_allowed: boolean;

    constructor(@Inject(MD_DIALOG_DATA) public data: any, private ds: DService,
                private securityTrimm: SecurityTrimming) {
        this.users = data._users;
        this.is_allowed = this.securityTrimm.isAllowedMasterRights(data._id);
    }

    ngOnInit() {

    }
}
