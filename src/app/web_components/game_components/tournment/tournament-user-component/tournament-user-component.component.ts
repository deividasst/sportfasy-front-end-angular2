import {Component, OnInit, Input, Inject, Injectable, Optional} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {DService} from '../../../shared/data.srv';
import {User} from '../../../shared/User';

@Injectable()
@Component({
    selector: 'app-tournament-user-component',
    templateUrl: './tournament-user-component.component.html',
    styleUrls: ['./tournament-user-component.component.sass']
})
export class TournamentUserComponentComponent implements OnInit {

    @Input()
    tournament: any;

    @Input()
    users: User[];
    @Input()
    is_allowed: boolean;

    public opened = false;
    tournamentObject: any;
    index: any;

    constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
                private ds: DService) {
    }

    public close() {
        this.opened = false;
    }

    public open(user) {
        this.index = this.users.indexOf(user);
        this.opened = true;
    }

    // Deletes user from tournament then delete btn is pressed
    delete() {
        this.users.splice(this.index, 1);
        this.tournamentObject = ({
            name: this.data.name,
            _users: this.users
        });
        this.ds.updateTournament(JSON.stringify(this.tournamentObject)).subscribe(obj => {
            this.opened = false;
        });
    }

    ngOnInit() {
    }

    // Closes user credentials field
    conceal(user) {
        if (document.getElementById('userContent').style.display === 'block') {
            document.getElementById('userContent').style.display = 'none';
            document.getElementById('contentas1').style.display = 'none';
        }
    }

    // Shows user credentials field
    show(user) {
        if (document.getElementById('userContent').style.display === 'none') {
            document.getElementById('userContent').innerHTML = 'Name: ' + user.name + '<br/>' + 'Surname: ' + user.surname + '<br/>' + 'Email: ' + user.email;
            document.getElementById('userContent').style.display = 'block';
            document.getElementById('contentas1').style.display = 'block';

        }
    }
}
