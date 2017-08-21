import {Component, OnInit, Input, Inject, Optional} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {Team} from '../../../shared/Team';
import {DService} from '../../../shared/data.srv';

@Component({
    selector: 'app-tournament-team-component',
    templateUrl: './tournament-team-component.component.html',
    styleUrls: ['./tournament-team-component.component.sass']
})
export class TournamentTeamComponentComponent implements OnInit {
    @Input()
    teams: Team[];

    team: any;
    teamArray: any;
    teaminfo: any;
    n: any;

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

            this.teamArray = (team.map(function (obj) {
                return obj._team;
            }));
            // Goes trough array one element by one
            this.n = this.teamArray.length;
            for (let i = 0; i < this.n; ++i) {
                this.teamArray[i] = Array;
                this.teamIncome(this.teamArray[i]._id);
            }
        })
    }

    // Gets my team income
    teamIncome(team_id): void {
        this.ds.getTournamentTeams(team_id).subscribe(income => {
            this.teams = income;
            console.log(income, 'income of team');
        })
    }
}

