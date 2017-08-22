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
    tournamentID: string;
    tournament_team;

    constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
                private ds: DService) {
        this.tournamentID = data._id;
    }

    ngOnInit() {

        this.ds.getTournament(this.tournamentID).subscribe(tournament => {
            this.tournament_team = new Array;
            tournament.forEach((team) => {
                const object = {
                        name: String,
                        budget: Number,
                        position: Number
                        };
                object.name = team._team.name;
                object.budget = team.team_total;
                object.position = team.position;
                this.tournament_team.push(object);
            });
        })
    }

}
