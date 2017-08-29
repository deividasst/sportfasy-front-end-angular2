import {Component, OnInit, Input, Output, Inject, Injectable, Optional, EventEmitter, ViewChild} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {DService} from '../../../shared/data.srv';
import {SecurityTrimming} from '../../../shared/security-trimming.srv';
import {TokenHolderServise} from '../../../shared/tokenholder.srv';
import {Players} from '../../../shared/Players'
import {Team} from '../../../shared/Team'
import {GridTeamPlayersComponent} from '../grid-team-players/grid-team-players.component';
import {GridTeamPlayersSellComponent} from '../grid-team-players-sell/grid-team-players-sell.component';
@Component({
    selector: 'app-team-dialog',
    templateUrl: './team-dialog.component.html',
    styleUrls: ['./team-dialog.component.sass']
})
export class TeamDialogComponent implements OnInit {
    public opened;
    players: Players[];
    total_players: Players[];
    remainedPlayers: Players[];
    team_players: Players[];
    teams: Team[];
    teamArray: any;
    teamTotals: any;
    list: Array<any> = new Array;

    @Input() onPlayerSold: EventEmitter<any>;

    @ViewChild(GridTeamPlayersSellComponent) playerBuyGRid: GridTeamPlayersSellComponent
    @ViewChild(GridTeamPlayersComponent) teamGrid: GridTeamPlayersComponent

    constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
                private ds: DService,
                private securityTrimm: SecurityTrimming,
                private tokenHolder: TokenHolderServise) {
        this.onPlayerSold = new EventEmitter();
    }

    setRemainedPlayersInTeam(remainedPlayersInTeam: Players[]) {
        this.remainedPlayers = remainedPlayersInTeam;
        this.players = this.compare();
        console.log('try call remainded players: ' + remainedPlayersInTeam.length);
        this.playerBuyGRid.changeFreePlayerList(this.players);
    }

    putBougthPlayerToTeam(player: any){
        this.teamGrid.pushPlayerToTeam(player);
    }
    calculateIncome(player: any){
        console.log(this.data.team_total - player.price)
    }
    calculateIncome1(player: any){
        console.log(this.data.team_total - player.price)
    }

    public close() {
        this.opened = false;
    }

    public open() {

        this.opened = true;
    }

    getPlayers() {
        this.ds.getTeamPlayers().subscribe(player => {
            this.total_players = player;
            this.players = this.compare();
        })

    }

    compare() {
        let players = this.total_players;
        players = players.filter((player) => {
            let exists_in_team = this.data._team._players.filter((team_player) => {
                if (team_player.name === player.name) {
                    return true;
                }
            })
            if (exists_in_team.length === 0 ) {
                return player;
            }
        })
        console.log('new compare' + players.length);
        return players;
    }

    ngOnInit() {
        this.getPlayers();
        console.log(this.data);
    }

}
