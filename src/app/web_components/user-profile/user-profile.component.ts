import {Component, OnInit} from '@angular/core';
import {DService} from '../shared/data.srv';
import {LogOutComponent} from '../sign_log/log-out/log-out.component';
import {TokenHolderServise} from '../shared/tokenholder.srv';
import {PopupComponent} from '../../popup/popup.component';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
    dataHolder = [];
    tokenEmail: string;

    constructor(private ds: DService,
                private logout: LogOutComponent,
                private tokenHolder: TokenHolderServise,
                public dialog: MdDialog) {
        this.tokenEmail = this.tokenHolder.getuserMail();
    }

    ngOnInit() {
        this.getUserTurnaments();
    }

    getUserTurnaments(): void {
        this.ds.getUserTurnaments(this.tokenHolder.getUserID()).subscribe(tournament => {
            if (tournament.length === 0) {
                this.sugestToJoinTournament();
            }
        })
    }

    sugestToJoinTournament(): void {
        const dialogRef = this.dialog.open(PopupComponent);
    }

    getUsers(): void {
        this.ds.getUsers()
            .subscribe(obj => {
                this.dataHolder.push(JSON.stringify(obj))
            });
    }

    logOut(): void {
        this.logout.logOut();
    }
}
