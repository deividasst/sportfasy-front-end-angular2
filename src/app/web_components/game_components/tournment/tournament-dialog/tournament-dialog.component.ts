import { Component, OnInit, Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {DService} from '../../../shared/data.srv';
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

    constructor(@Inject(MD_DIALOG_DATA) public data: any,
                private ds: DService,
                private securityTrimm: SecurityTrimming) {
        this.users = data._users;
        this.is_allowed = this.securityTrimm.isAllowedMasterRights(data._id);
        this.view = data._user;
    }

    ngOnInit() {

    }
}
