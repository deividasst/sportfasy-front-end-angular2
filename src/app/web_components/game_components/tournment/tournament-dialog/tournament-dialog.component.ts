import {Component, OnInit, Inject, Input, Optional} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {DService} from '../../../shared/data.srv';
import {SecurityTrimming} from '../../../shared/security-trimming.srv';
import {TokenHolderServise} from '../../../shared/tokenholder.srv';
import {User} from '../../../shared/User'
import {TournamentUserlistComponentComponent} from '../tournament-userlist-component/tournament-userlist-component.component';
import {Tournament} from '../../../shared/Tournament';

@Component({
    selector: 'app-tournament-dialog',
    templateUrl: './tournament-dialog.component.html',
    styleUrls: ['./tournament-dialog.component.sass']
})

export class TournamentDialogComponent implements OnInit {

    is_allowed: boolean;
    id_user: any;
    usrID: any;
    usrName: any;
    usrEmail: any
    usrSurname: any;
    users: User[];
    usrObject: any;

    public opened = false;


    constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
                private ds: DService,
                private securityTrimm: SecurityTrimming,
                private tokenHolder: TokenHolderServise) {
        this.users = data._users;
        this.is_allowed = this.securityTrimm.isAllowedMasterRights(data._id);
    }

    ngOnInit() {
    }

    // Adds user to tournament then join btn is pressed
    join() {
        this.users = this.data._users;
        this.usrID = this.tokenHolder.getUserID();
        this.usrName = this.tokenHolder.getUserName();
        this.usrSurname = this.tokenHolder.getUserSurname();
        this.usrEmail = this.tokenHolder.getEmail();
        this.usrObject = ({
            _id: this.usrID,
            name: this.usrName,
            surname: this.usrSurname,
            email: this.usrEmail
        });
        this.users.push(this.usrObject);
        this.ds.updateTournament(JSON.stringify(this.data)).subscribe(obj => {
        });
        document.getElementById('join').classList.add('prevent');
    }

}
