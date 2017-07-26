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
    usrObject: any;
    usrID: any;

    constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
                private ds: DService,
                private overlalltournament: OverAllTournamentsWidgetComponent) {
    }

    public close() {
        this.opened = false;
    }

    public open() {
        this.opened = true;
    }

    delete(user) {
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
        this.usrObject = ({
            name: this.data.name,
            _users: this.users
        });

        this.ds.updateTournament(JSON.stringify(this.usrObject)).subscribe(obj => {
            console.log(obj);
            this.opened = false;
        });
    }

    // delete(user) {
    //     this.overlalltournament.getTournaments();
    //     for (let i = 0; i < this.users.length; i++) {
    //         if (this.users[i] === user) {
    //             this.users.splice(i, 1);
    //         }
    //     }
    //     this.ds.updateTournament(this.data).map(data =>
    //         data.json).subscribe(obj => {
    //             console.log('=====> subscribe OBJ', obj);
    //         this.opened = false;
    //     });
    //     console.log(this.data, 'Senpai');
    //     console.log(this.users, 'SonGoku');
    // }


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
