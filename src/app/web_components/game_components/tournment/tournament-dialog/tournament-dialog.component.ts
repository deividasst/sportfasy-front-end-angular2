import {Component, OnInit, Inject, Input, Optional} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {DService} from '../../../shared/data.srv';
import {SecurityTrimming} from '../../../shared/security-trimming.srv';
import {TokenHolderServise} from '../../../shared/tokenholder.srv';
import {User} from '../../../shared/User'
import {TournamentUserlistComponentComponent} from '../tournament-userlist-component/tournament-userlist-component.component';
import {Tournament} from '../../../shared/Tournament';

@Component({
    selector: 'app-tournament-dialog',
    templateUrl: './tournament-dialog.component.html',
    styleUrls: ['./tournament-dialog.component.sass']
})

export class TournamentDialogComponent implements OnInit {

    is_allowed: boolean;
    // user: User;
    id_user: any;
    usrID: any;
    users: User[];

    public opened = false;


    constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
                private ds: DService,
                private securityTrimm: SecurityTrimming,
                private tokenHolder: TokenHolderServise,
                private  userList: TournamentUserlistComponentComponent) {
        this.users = data._users;
        this.is_allowed = this.securityTrimm.isAllowedMasterRights(data._id);
        console.log('data._id' + data._id);
    }
     ngOnInit() {
     }

    public close(status) {
        this.opened = false;
    }

    public open() {
        this.opened = true;
    }
    join() {
        this.users = this.data._users;
        this.usrID = this.tokenHolder.getUserID();
        console.log(this.usrID, 'SENPAI NOTICE ME');
        console.log(this.users, 'onichan');
        let user = new User();
        this.users.push(this.usrID);
        this.ds.updateTournament(JSON.stringify(this.data)).subscribe(obj => {
            console.log(obj._users.slice(-1)[0].name);
            user = obj._users.slice(-1)[0];
            this.users.push(user);

            // alert('Jus esate pridėtas!');
        });
    }

    }





// import { Component, OnInit, Inject, Input, Optional} from '@angular/core';
// import {MD_DIALOG_DATA} from '@angular/material';
// import {DService} from '../../../shared/data.srv';
// import {SecurityTrimming} from '../../../shared/security-trimming.srv';
// import {TokenHolderServise} from '../../../shared/tokenholder.srv';
// import {User} from '../../../shared/User'
// import {TournamentUserlistComponentComponent} from '../tournament-userlist-component/tournament-userlist-component.component';
//
//
// @Component({
//     selector: 'app-tournament-dialog',
//     templateUrl: './tournament-dialog.component.html',
//     styleUrls: ['./tournament-dialog.component.sass']
// })
//
// export class TournamentDialogComponent implements OnInit {
//     users: User[];
//     is_allowed: boolean;
//     user: User;
//
//     constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
//                 private ds: DService,
//                 private securityTrimm: SecurityTrimming,
//                 private  userList: TournamentUserlistComponentComponent) {
//         this.users = data._users;
//         this.is_allowed = this.securityTrimm.isAllowedMasterRights(data._id);
//         console.log('data._id' + data._id);
//     }
//
//     ngOnInit() {
//
//     }
//     joinUser() {
//         this.userList.join(this.user);
//     alert('Jus esate pridėtas !')
//     }
// }
