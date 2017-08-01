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

    constructor(private ds: DService) {
    }

    getTeams(): void {
        this.ds.getAllTeams().subscribe(team => {
            this.teams = team
            console.log("Team", team[0].name)
        })
    }

    ngOnInit() {
        this.getTeams();
    }

}
