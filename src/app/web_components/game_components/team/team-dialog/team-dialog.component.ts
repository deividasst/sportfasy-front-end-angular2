import {Component, OnInit, Input, Output, Inject, Injectable, Optional} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {DService} from '../../../shared/data.srv';
import {User} from '../../../shared/User';
import {SecurityTrimming} from '../../../shared/security-trimming.srv';
import {TokenHolderServise} from '../../../shared/tokenholder.srv';
import {Players} from '../../../shared/Players'
import {Team} from '../../../shared/Team'
import {GridTeamPlayersComponent} from '../grid-team-players/grid-team-players.component';
@Component({
    selector: 'app-team-dialog',
    templateUrl: './team-dialog.component.html',
    styleUrls: ['./team-dialog.component.sass']
})
export class TeamDialogComponent implements OnInit {
    public opened;
    players: Players[];
    teams: Team[];
    teamTotals: any;
    constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
                private ds: DService,
                private securityTrimm: SecurityTrimming,
                private tokenHolder: TokenHolderServise) {
    }


    public close() {
        this.opened = false;
    }

    public open() {

        this.opened = true;
    }


    ngOnInit() {
        this.getPlayers();
        console.log("team id is"+ this.data._team._id);
        console.log("this is data", this.data);
        this.getPoints( this.data._team._id);
        

    }

    getPlayers(): void {
        this.ds.getTeamPlayers().subscribe(player => {
            this.players = player
        })
    }

    getPoints(teamid): void {
        this.ds.getTeamTotal(teamid).subscribe(teamtotals => {
            this.teamTotals = teamtotals;
            this.teamTotals = teamtotals.total_income;
            console.log(this.teamTotals);
        })
        console.log(this.teamTotals);
    }
}
