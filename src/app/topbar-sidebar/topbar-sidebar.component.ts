import {Component, OnInit} from '@angular/core';
import {DService} from '../web_components/shared/data.srv';
import {Router} from '@angular/router';
import {TokenHolderServise} from '../web_components/shared/tokenholder.srv';
import {LogOutComponent} from '../web_components/sign_log/log-out/log-out.component';
import {isUndefined} from "util";

@Component({
    selector: 'app-topbar-sidebar',
    templateUrl: './topbar-sidebar.component.html',
    styleUrls: ['./topbar-sidebar.component.sass']
})
export class TopbarSidebarComponent implements OnInit {


    name1: string = localStorage.getItem('name_user');
    err;
    isLogged = false;


    constructor(private ds: DService,
                private router: Router,
                private tokenHolder: TokenHolderServise,
                private logout: LogOutComponent) {

    }

    ngOnInit() {
        this.check();
    }

    check(): void {
        // console.log(this.tokenHolder.getToken());
        // if (this.tokenHolder.getToken() !== isUndefined) {
        //     this.isLogged = false;
        // } else {
        //     this.isLogged = true;
        // }
    }

    logOut() {
        this.logout.logOut();
    }
}
