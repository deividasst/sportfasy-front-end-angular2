import {Component, OnInit} from '@angular/core';
import {Team} from '../../../shared/Team'
import {DService} from '../../../shared/data.srv';

@Component({
    selector: 'app-list-team',
    templateUrl: './list-team.component.html',
    styleUrls: ['./list-team.component.sass']
})
export class ListTeamComponent implements OnInit {

    teams: Team[];
    public listItems: Array<number> = new Array;


    constructor(private ds: DService) {
    }

    getTeams(): void {
        this.ds.getAllTeams().subscribe(team => {
                this.teams = team;
                this.listItems = [];
                let sorted = this.teams.sort((b, a) => a.points - b.points).map((team, index) => {
                        console.log(team.rank = index + 1);
                    }
                )
            }
        )
    }

    ngOnInit() {
        // this.getTeams();
    }
}
