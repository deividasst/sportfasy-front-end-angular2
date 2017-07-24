import {Component, OnInit} from '@angular/core';
import {DService} from './web_components/shared/data.srv';
import {TokenHolderServise} from './web_components/shared/tokenholder.srv';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent {
    title = 'app';

    constructor(private tokenHolder: TokenHolderServise, private ds: DService) {
        if (localStorage.getItem('id_token') && !this.tokenHolder.getUserID()) {
            this.refreshUserData();
        }
    }

    OnInit() {
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
