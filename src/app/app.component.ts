import {Component, OnInit} from '@angular/core';
import {DService} from './web_components/shared/data.srv';
import {TokenHolderServise} from './web_components/shared/tokenholder.srv';
import {Router} from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent {
    title = 'app';
    name: string;
    token: string;
    public location = '' ;
    router;

    constructor(private tokenHolder: TokenHolderServise,
                private ds: DService,
                private _router: Router) {
        this.location = _router.url;
        this.router = _router;
        this.tokenHolder.nameChange$.subscribe(item => this.name = item);
        if (localStorage.getItem('id_token') && !this.tokenHolder.getUserID()) {
            this.refreshUserData();
        }
    }

    OnInit() {
        this.refreshUserData();
        localStorage.removeItem('id_token');
        this.tokenHolder.setUserName('');
        localStorage.clear();
    }

    private refreshUserData() {
        this.ds.getUserCredentials().subscribe(
            obj => {
                this.tokenHolder.setUserID(obj._id);
                this.tokenHolder.setUserEmail(obj.email);
                this.tokenHolder.setUserName(obj.name);
                this.tokenHolder.setUserSurname(obj.surname);
            }
        )
    }




}
