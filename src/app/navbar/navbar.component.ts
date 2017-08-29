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
            // console.log('user id in navbar' + userId);
            if (localStorage.getItem('id_token')) {
                // console.log('user id in navbar inf IF' + userId);
                // console.log('navbar token: ' + localStorage.getItem('id_token'));
                this.getUserPoints(userId);
            }
        });
        this.pointsHolder.pointsChange$.subscribe(item => this.points = item);
        // this.points = this.pointsHolder.getPoints();
    }

    ngOnInit() {
        console.log(this.points + " navbar");
    }

    logOut(): void {
        // localStorage.removeItem('id_token');
        // this.tokenHolder.setUserName('');
        // localStorage.clear();
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
