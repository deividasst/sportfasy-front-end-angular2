import {Component, OnInit, Input, Inject, Injectable, Optional} from '@angular/core';
import {Tournament} from '../../../shared/Tournament';
import {MD_DIALOG_DATA} from '@angular/material';
import {DService} from '../../../shared/data.srv';
import {DialogService, DialogCloseResult} from '@progress/kendo-angular-dialog';
import {TokenHolderServise} from '../../../shared/tokenholder.srv';
import {OverAllTournamentsWidgetComponent} from '../over-all-tournaments-widget/over-all-tournaments-widget.component'
import {User} from '../../../shared/User';

@Injectable()
@Component({
    selector: 'app-tournament-userlist-component',
    templateUrl: './tournament-userlist-component.component.html',
    styleUrls: ['./tournament-userlist-component.component.sass']
})
export class TournamentUserlistComponentComponent implements OnInit {

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
                private ds: DService,
                private overlalltournament: OverAllTournamentsWidgetComponent) {
    }

    public close() {
        this.opened = false;
    }

    public open(user) {
        this.index = this.users.indexOf(user);
        this.opened = true;
    }

    delete() {
        console.log('Sasuke:', this.index);
        this.tournamentObject = ({
            name: this.data.name,
            _users: this.users.splice(this.index, 1)
        });
        this.ds.updateTournament(JSON.stringify(this.tournamentObject)).subscribe(obj => {
            this.opened = false;
        });
    }

    ngOnInit() {
    }

    conceal(user) {
        if (document.getElementById('userContent').style.display === 'block') {
            document.getElementById('userContent').style.display = 'none';
            document.getElementById('contentas1').style.display = 'none';
        }
    }

    show(user) {
        if (document.getElementById('userContent').style.display === 'none') {
            document.getElementById('userContent').innerHTML = 'Name: ' + user.name + '<br/>' + 'Surname: ' + user.surname + '<br/>' + 'Email: ' + user.email;
            document.getElementById('userContent').style.display = 'block';
            document.getElementById('contentas1').style.display = 'block';

        }
    }
}
