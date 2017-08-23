import {Component, OnInit, Input, Output, Inject, Injectable, Optional, EventEmitter, ViewChild} from '@angular/core';
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
    remainedPlayers: Players[];
    teams: Team[];
    teamArray: any;
    teamTotals: any;
    list: Array<any> = new Array;

    @Input() onPlayerSold: EventEmitter<any>;

    @ViewChild(AppGridTeamPlayersSell) PlayerBuyGRid: AppGridTeamPlayersSell

    constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
                private ds: DService,
                private securityTrimm: SecurityTrimming,
                private tokenHolder: TokenHolderServise) {
        this.onPlayerSold = new EventEmitter();
    }

    setRemainedPlayersInTeam(remainedPlayers: Players[]){
        this.remainedPlayers = remainedPlayers;
        console.log('eventemiter' + JSON.stringify(remainedPlayers,null,2));
        this.compare();
        this.onPlayerSold.emit(this.players);
    }


    public close() {
        this.opened = false;
    }

    public open() {

        this.opened = true;
    }


    ngOnInit() {
        this.getPlayers();
        // console.log('team id is' + this.data._team._id);
        // console.log('this is data', this.data);
        this.getPoints(this.data._team._id);
        // console.log(this.list);
        // console.log(this.teamArray);

    }

    getPlayers() {
        this.ds.getTeamPlayers().subscribe(player => {
            this.players = player;
            this.compare();
            // this.teamArray = [];
            // this.players = (this.players.map(function (obj) {
            //     return obj;
            // }))
            // console.log(this.teamArray);
            // console.log('markoplayers' + JSON.stringify(player,null,2));
        })

    }

    getPoints(teamid): void {
        this.ds.getTeamTotal(teamid).subscribe(teamtotals => {
            this.teamTotals = teamtotals;
            this.teamTotals = teamtotals.total_income;
            // console.log(this.teamTotals);
        })
    }

    compare() {
        for (let i = 0; i < this.data._team._players.length; i++) {
            for (let j = 0; j < this.players.length; j++) {
                if (this.data._team._players[i].name === this.players[j].name) {
                    this.players.splice(j, 1);
                    break;
                }
            }
        }
    }
}
