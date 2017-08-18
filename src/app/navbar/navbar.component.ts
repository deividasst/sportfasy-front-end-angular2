import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {TokenHolderServise} from '../web_components/shared/tokenholder.srv';
import {LogOutComponent} from '../web_components/sign_log/log-out/log-out.component';
import {DService} from '../web_components/shared/data.srv';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
    name: string;
    public opened;

    public close() {
        this.opened = false;
    }

    public open() {
        this.opened = true;
    }

    constructor(private ds: DService,
                private logout: LogOutComponent,
                private tokenHolder: TokenHolderServise,
                public dialog: MdDialog) {
        this.tokenHolder.nameChange$.subscribe(item => this.name = item);

    }

    ngOnInit() {
    }

    logOut(): void {
        this.logout.logOut();
        this.opened = false;
    }

}
