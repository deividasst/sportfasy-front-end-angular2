import {Component, Input, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {TokenHolderServise} from '../web_components/shared/tokenholder.srv';
import {LogOutComponent} from '../web_components/sign_log/log-out/log-out.component';
import {DService} from '../web_components/shared/data.srv';
import {PointsHolderServise} from '../web_components/shared/pointsholder';
import {LocalStorage} from "ngx-webstorage";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
    name: string;
    public opened;
    userID;
    points;

    public close() {
        this.opened = false;
    }

    public open() {
        this.opened = true;
    }

    constructor(private ds: DService,
                private logout: LogOutComponent,
                private tokenHolder: TokenHolderServise,
                private pointsHolder: PointsHolderServise,
                public dialog: MdDialog) {
        this.tokenHolder.nameChange$.subscribe(item => this.name = item);
        this.tokenHolder.idChange$.subscribe(userId => {
            this.userID = userId;
            if (localStorage.getItem('id_token')) {
                this.getUserPoints(this.tokenHolder.getUserID());
            }
        });
        this.pointsHolder.pointsChange$.subscribe(item => this.points = item);
    }

    ngOnInit() {
        this.ds.getUserLedger(this.userID).subscribe(points => {
            if (typeof points[0] !== 'undefined') {
                this.points = points[0].sum;
                this.pointsHolder.setPoints(points[0].sum);
            } else {
                this.points = 0;
                this.pointsHolder.setPoints(0);
            }
        });
        this.pointsHolder.pointsChange$.subscribe(item => this.points = item);
    }

    logOut(): void {
        this.logout.logOut();
        this.opened = false;
    }

    getUserPoints(userId): void {
        this.ds.getUserLedger(userId).subscribe(points => {
            if (typeof points[0] !== 'undefined') {
                this.pointsHolder.setPoints(points[0].sum);
            } else {
                this.pointsHolder.setPoints(0);
            }
        });
    }
}
