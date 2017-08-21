import {Component, OnInit, Input, Inject, Optional} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {Team} from '../../../shared/Team';
import {DService} from '../../../shared/data.srv';
import {Tournament_teams} from '../../../shared/Tournament-teams';

@Component({
    selector: 'app-tournament-team-component',
    templateUrl: './tournament-team-component.component.html',
    styleUrls: ['./tournament-team-component.component.sass']
})
export class TournamentTeamComponentComponent implements OnInit {
    @Input()
    teams: Team[];

    team: Tournament_teams[];
    teamArray: any;
    teaminfo: any;
    n: any;
    tournament_team: Array<any>= new Array;

    constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
                private ds: DService) {
        this.teaminfo = data._users;
        this.getTournamentTeamsbyID(data._id);
    }

    ngOnInit() {
    }

    // Gets tournament teams by tournament ID
    getTournamentTeamsbyID(tournamentID): void {
        this.ds.getTournamentTeamsbyID(tournamentID).subscribe(team => {
            this.teams = team;
            this.teamArray = [];
            this.teamArray = (team.map(function (obj) {
                return obj._team;
            }))
            for (let i = 0; i < this.teamArray.length; i++) {
            this.ds.getTeamsIncomes(this.teamArray[i]._id).subscribe(income => {
                const object = {
                    name: String,
                    budget: Number,
                };
                object.name = this.teamArray[i].name;
                object.budget = income.total_income;
                this.tournament_team.push(object);
            })
            }
        })
    }
}
