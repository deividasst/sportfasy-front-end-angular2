import {Component, OnInit} from '@angular/core';
import {DService} from '../../../shared/data.srv';
import {KendoUiSettings} from '../../../shared/kendo-ui-settings.srv';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';

@Component({
    selector: 'app-over-all-teams-widget',
    templateUrl: './over-all-teams-widget.component.html',
    styleUrls: ['./over-all-teams-widget.component.scss']
})
export class OverAllTeamsWidgetComponent implements OnInit {
    teams: any;
    players: any;
    // Kendo grid params
    gridView: GridDataResult;
    data: Object[];
    pageSize: number;
    skip: number;
    columns: any = [{'field': '_team.name', 'title': 'Name'},
        {'field': '_team_master.name', 'title': 'Team master'},
        {'field': '_tournament.name', 'title': 'Tournaments'}]


    constructor(private ds: DService,
                private  kendoSettings: KendoUiSettings) {
        this.pageSize = this.kendoSettings.getPageSize();
        this.skip = this.kendoSettings.getSkip();
    }

    getTeams(): void {
        this.ds.getAllTeams().subscribe(team => {
            this.teams = team;
            this.loadItems();
        })
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

    public showOnlyBeveragesDetails(dataItem: any, index: number): boolean {
        return dataItem._players !== [];
    }

    ngOnInit() {
        this.getTeams();
    }
}
