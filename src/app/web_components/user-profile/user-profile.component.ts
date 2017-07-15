import {Component, OnInit, OnDestroy} from '@angular/core';
import {DService} from '../shared/data.srv';
import {LogOutComponent} from '../sign_log/log-out/log-out.component';
import {TokenHolderServise} from '../shared/tokenholder.srv';
import {PopupComponent} from '../../popup/popup.component';
import {MdDialog, MdDialogRef} from '@angular/material';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
    name: string;
    subscription: Subscription;
    constructor(private ds: DService,
                private logout: LogOutComponent,
                private tokenHolder: TokenHolderServise,
                public dialog: MdDialog) {
        // this.getUserTurnaments();
        // this.subscription = this.tokenHolder.navItem$
        //     .subscribe(item => this.name = item);
    }

    ngOnInit() {
        this.subscription = this.tokenHolder.navItem$
            .subscribe(item => this.name = item);
        this.getUserTurnaments();
    }

    getUserTurnaments(): void {
        this.ds.getUserTurnaments(
            this.tokenHolder.getUserID()).subscribe(tournament => {
            if (tournament.length === 0) {
                this.sugestToJoinTournament();
            }
        })
    }

    sugestToJoinTournament(): void {
        const dialogRef = this.dialog.open(PopupComponent);
    }

    // getUsers(): void {
    //     this.ds.getUsers()
    //         .subscribe(obj => {
    //             this.dataHolder.push(JSON.stringify(obj))
    //         });
    // }

    logOut(): void {
        this.logout.logOut();
    }

    ngOnDestroy() {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    }
}
