import {Component, OnInit, Input, Inject} from '@angular/core';
import {Tournament} from '../../../shared/Tournament';
import {MD_DIALOG_DATA} from '@angular/material';
import {DService} from '../../../shared/data.srv';
import {Router} from '@angular/router';
import { DialogService, DialogCloseResult } from '@progress/kendo-angular-dialog';

@Component({
    selector: 'app-tournament-userlist-component',
    templateUrl: './tournament-userlist-component.component.html',
    styleUrls: ['./tournament-userlist-component.component.sass']
})
export class TournamentUserlistComponentComponent implements OnInit {

    @Input()
    tournament: any;

    @Input()
    users: any;
    @Input()
    is_allowed: boolean;

    public opened = false;

    constructor(@Inject(MD_DIALOG_DATA ) public data: any,
                private dialogService: DialogService,
                private ds: DService) {
        console.log('is_allowed ' + this.is_allowed)
    }

    public close(status) {
      this.opened = false;
    }

    public open() {
      this.opened = true;
    }

    delete(user) {
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
        this.ds.updateTournament(JSON.stringify(this.data)).subscribe(obj => {
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
