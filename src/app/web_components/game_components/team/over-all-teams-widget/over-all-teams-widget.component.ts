import {Component, OnInit} from '@angular/core';
import {Team} from '../../../shared/Team'
import {DService} from '../../../shared/data.srv';
import {TeamPlayersComponent} from '../team-players/team-players.component'

@Component({
    selector: 'app-over-all-teams-widget',
    templateUrl: './over-all-teams-widget.component.html',
    styleUrls: ['./over-all-teams-widget.component.scss']
})
export class OverAllTeamsWidgetComponent implements OnInit {
    teams: Team;
    players: any;


    constructor(private ds: DService) {
    }

    getTeams(): void {
        this.ds.getAllTeams().subscribe(team => {
            this.teams = team
        })
    }

    ngOnInit() {
        this.getTeams();
    }


}
