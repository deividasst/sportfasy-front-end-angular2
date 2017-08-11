import {Component, OnInit} from '@angular/core';
import {DService} from '../shared/data.srv';
import {TokenHolderServise} from '../shared/tokenholder.srv';
import {PopupComponent} from '../../popup/popup.component';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
    userId: string;

    constructor(private ds: DService,
                private tokenHolder: TokenHolderServise,
                public dialog: MdDialog) {
    }

    ngOnInit() {
        this.tokenHolder.idChange$.first().subscribe(item => {
            this.userId = item;
            this.getUserTurnaments(item);
        });
    }

    getUserTurnaments(userId): void {
        this.ds.getUserTurnaments(userId).subscribe(tournament => {
            console.log('tournaments ' + tournament);
            if (tournament.length === 0) {
                this.sugestToJoinTournament();
            }
        });
    }

    sugestToJoinTournament(): void {
        const dialogRef = this.dialog.open(PopupComponent);
    }
}
