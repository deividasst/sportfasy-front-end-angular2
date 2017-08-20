import {Component, Input, OnInit} from '@angular/core';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';
import {DService} from '../../../shared/data.srv';
import {KendoUiSettings} from '../../../shared/kendo-ui-settings.srv';
import {Team} from '../../../shared/Team';

@Component({
  selector: 'app-grid-tournament-teams',
  templateUrl: './grid-tournament-teams.component.html',
  styleUrls: ['./grid-tournament-teams.component.sass']
})
export class GridTournamentTeamsComponent implements OnInit {

    @Input()
    teams: Team[];
    players: any;
    // Kendo grid params
    gridView: GridDataResult;
    data: Object[];
    pageSize: number;
    skip: number;
    columns: any = [{'field': '_team.name', 'title': 'Name'},
        {'field': '_team_master.name',  'title': 'Budget'},
        {'field': '_tournament.name', 'title': 'Position'}]


    constructor(private ds: DService,
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
    }
}





