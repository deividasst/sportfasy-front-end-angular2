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

    constructor(private tokenHolder: TokenHolderServise,
                private ds: DService) {

        console.log(typeof localStorage.getItem('id_token'));
        console.log(!localStorage.getItem('id_token'));

        if (localStorage.getItem('id_token') && !this.tokenHolder.userID) {
            console.log('epty local');
            this.refreshUSerData();
            console.log(this.tokenHolder.userID);
        }
    }

    OnInit() {
        // if (localStorage.getItem('id_token') && !this.tokenHolder.userID) {
        //     console.log('epty local');
        //     this.refreshUSerData();
        //     console.log(this.tokenHolder.userID);
        // }
    }

    private refreshUSerData() {
        this.ds.getUserCredentials().subscribe(
            obj => {
                this.tokenHolder.setUserID(obj._id);
                this.tokenHolder.setUserEmail(obj.email);
                this.tokenHolder.setUserName(obj.name);
                console.log(' ' + JSON.stringify({data: obj}, null, 4));
            }
        )
    }
}
