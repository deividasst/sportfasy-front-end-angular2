import {Component, OnInit} from '@angular/core';
import {Team} from '../../../shared/Team'
import {DService} from '../../../shared/data.srv';
import {TokenHolderServise} from '../../../shared/tokenholder.srv';

@Component({
    selector: 'app-list-team',
    templateUrl: './list-team.component.html',
    styleUrls: ['./list-team.component.sass']
})
export class ListTeamComponent implements OnInit {

    teams: Team[];
    userId: string;

    constructor(private ds: DService,
                private tokenHolder: TokenHolderServise) {
    }

    ngOnInit() {
        this.tokenHolder.idChange$.subscribe(item => {
            this.userId = item;
            this.getTournamentTeams(item);
        });
    }

    // Gets my tournament teams
    getTournamentTeams(teamMaster): void {
        this.ds.getTournamentTeams(teamMaster).subscribe(team => {
            this.teams = team;

        });
    }
}
