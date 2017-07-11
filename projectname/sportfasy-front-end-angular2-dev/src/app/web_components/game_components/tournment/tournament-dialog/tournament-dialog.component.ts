import { Component, OnInit, Inject} from '@angular/core';
import { OverAllTournamentsWidgetComponent } from '../over-all-tournaments-widget/over-all-tournaments-widget.component'
import {MD_DIALOG_DATA} from '@angular/material';
import {TournamentUserlistComponentComponent} from '../tournament-userlist-component/tournament-userlist-component.component';
import {DService} from '../../../shared/data.srv';


@Component({
  selector: 'app-tournament-dialog',
    templateUrl: './tournament-dialog.component.html',
  styleUrls: ['./tournament-dialog.component.sass']
})

export class TournamentDialogComponent implements OnInit {
    tournament: any;
    view: any;

    constructor(@Inject(MD_DIALOG_DATA) public data: any, private ds: DService) {
        this.tournament = data._users;
        this.view = data._user;
    }

    ngOnInit() {

    }

}