import {Component, Inject, Input, OnInit} from '@angular/core';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';
import {MdDialog} from '@angular/material';
import {Team} from '../shared/Team';
import {Tournament_teams} from '../shared/Tournament-teams';
import {DService} from '../shared/data.srv';
import {KendoUiSettings} from '../shared/kendo-ui-settings.srv';
import {Tournament} from "../shared/Tournament";

@Component({
  selector: 'app-grid-user-profile',
  templateUrl: './grid-user-profile.component.html',
  styleUrls: ['./grid-user-profile.component.sass']
})
export class GridUserProfileComponent implements OnInit {
    @Input() tournaments: Tournament[];
    @Input() teams: Team[];

    tournament_teams: Tournament_teams[];
    players: any;
    // Kendo grid params
    gridView: GridDataResult;
    data: Object[];
    pageSize: number;
    skip: number;
    columns: any = [{'field': '_team.name', 'title': 'Team name'},
        {'field': '_tournament.name', 'title': 'Tournament name'},
        {'field': 'position', 'title': 'Team position'},
        {'field': 'team_total', 'title': 'Budget'}]


    constructor(private ds: DService,
                public dialog: MdDialog,
                private  kendoSettings: KendoUiSettings) {
        this.pageSize = this.kendoSettings.getPageSize();
        this.skip = this.kendoSettings.getSkip();
    }

    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

    private loadItems(): void {
        this.gridView = {
            data: this.teams.slice(this.skip, this.skip + this.pageSize),
            total: this.teams.length
        };
    }

    ngOnInit() {
        this.loadItems();
        console.log(this.teams, 'Grid user p');
    }
}
