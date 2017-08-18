import {Component, OnInit, Inject, Input, Optional} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {DService} from '../../../shared/data.srv';
import {SecurityTrimming} from '../../../shared/security-trimming.srv';
import {TokenHolderServise} from '../../../shared/tokenholder.srv';
import {User} from '../../../shared/User'
import {Team} from '../../../shared/Team';

@Component({
    selector: 'app-tournament-dialog',
    templateUrl: './tournament-dialog.component.html',
    styleUrls: ['./tournament-dialog.component.sass']
})

export class TournamentDialogComponent implements OnInit {

    is_allowed: boolean;
    teaminfo: any;
    usrID = this.tokenHolder.getUserID();
    usrName = this.tokenHolder.getUserName();
    usrSurname = this.tokenHolder.getUserSurname();
    usrEmail = this.tokenHolder.getEmail();
    users: User[];
    teams: Team[];
    usrObject: any;
    check = true;
    public opened;

    constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
                private ds: DService,
                private securityTrimm: SecurityTrimming,
                private tokenHolder: TokenHolderServise) {
        this.users = data._users;
        console.log(data._id, 'cia yra DATA');
        this.getTournamentTeamsbyID(data._id);
        this.is_allowed = this.securityTrimm.isAllowedMasterRights(data._id);
    }

    public close() {
        this.opened = false;
}

    public open() {
        document.getElementById('join').classList.add('prevent');
        this.opened = true;
    }

    // Check if user already joined to tournament
    ngOnInit() {
        for (let i = 0; i < this.users.length; i++ ) {
            if (this.data._users[i].name === this.usrName) {
                this.check = false;
            }
        }
    }

    // Adds user to tournament then join btn is pressed
    join() {
                this.users = this.data._users;
                this.usrObject = ({
                    _id: this.usrID,
                    name: this.usrName,
                    surname: this.usrSurname,
                    email: this.usrEmail
                });
                this.users.push(this.usrObject);
                this.ds.updateTournament(JSON.stringify(this.data)).subscribe(obj => {
                });
                this.opened = false;
                this.check = false;

    }
    getTournamentTeamsbyID(tournamentID): void {
        this.ds.getTournamentTeamsbyID(tournamentID).subscribe(team => {
            this.teams = team;
            // this.teaminfo = (team.map(function (obj) {
            //     return obj._team;
            // }));
            this.teaminfo = (team.map(function (obj) {
                return obj._team.name;
            }));
            console.log(this.teaminfo, 'the Teams')
        })
    }

}
