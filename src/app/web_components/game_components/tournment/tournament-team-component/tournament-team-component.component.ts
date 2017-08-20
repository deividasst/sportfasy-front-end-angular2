import {Component, OnInit, Input, Inject, Optional} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {Team} from '../../../shared/Team';
import {DService} from '../../../shared/data.srv';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';
import {KendoUiSettings} from '../../../shared/kendo-ui-settings.srv';

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

    // Kendo grid params
    gridView: GridDataResult;
    pageSize: number;
    skip: number;
    columns: any = [{'field': 'team.name', 'title': 'Name'},
        {'field': '_team_master.name', 'title': 'Budget'},
        {'field': '_tournament.name', 'title': 'Position'}]

    constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
                private ds: DService,
                private  kendoSettings: KendoUiSettings) {
        this.teaminfo = data._users;
        this.getTournamentTeamsbyID(data._id);
        this.pageSize = this.kendoSettings.getPageSize();
        this.skip = this.kendoSettings.getSkip();
    }

    ngOnInit() {
        // this.loadItems();

            // this.teamIncome(this.team._id);
    }

    getTournamentTeamsbyID(tournamentID): void {
        this.ds.getTournamentTeamsbyID(tournamentID).subscribe(team => {
            this.teams = team;

            this.teamArray = (team.map(function (obj) {
                return obj._team;
            }));
            console.log(this.teamArray[0]._id, 'Wilno')
            this.teamIncome(this.teamArray[0]._id);
            console.log(this.teamArray, 'the Teams');

        })
    }


    // Gets my team income
    teamIncome(team_id): void {
            this.ds.getTournamentTeams(team_id).subscribe(income => {
            this.teams = income;
                console.log(income, 'Ukmerge');
        })
    }


    // protected pageChange(event: PageChangeEvent): void {
    //     this.skip = event.skip;
    //     this.loadItems();
    // }
    //
    // private loadItems(): void {
    //     this.gridView = {
    //         data: this.teams.slice(this.skip, this.skip + this.pageSize),
    //         total: this.teams.length
    //     };
    // }

}

