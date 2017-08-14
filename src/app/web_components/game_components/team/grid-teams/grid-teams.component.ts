import {Component, Input, OnInit} from '@angular/core';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';
import {DService} from '../../../shared/data.srv';
import {KendoUiSettings} from '../../../shared/kendo-ui-settings.srv';
import {Team} from '../../../shared/Team';
import {MdDialog} from '@angular/material';
import {TeamDialogComponent} from '../team-dialog/team-dialog.component';
@Component({
  selector: 'app-grid-teams',
  templateUrl: './grid-teams.component.html',
  styleUrls: ['./grid-teams.component.sass']
})
export class GridTeamsComponent implements OnInit {
    @Input()
    teams: Team[];
    players: any;
    // Kendo grid params
    gridView: GridDataResult;
    data: Object[];
    pageSize: number;
    skip: number;
    columns: any = [{'field': '_team.name', 'title': 'Name'},
        {'field': '_team_master.name',  'title': 'Team master'},
        {'field': '_tournament.name', 'title': 'Tournaments'}]


    constructor(private ds: DService,
                public dialog: MdDialog,
                private  kendoSettings: KendoUiSettings) {
        this.pageSize = this.kendoSettings.getPageSize();
        this.skip = this.kendoSettings.getSkip();
    }

    openDialog(team) {

        const dialogRef = this.dialog.open(TeamDialogComponent, {
            data: team,
            height: '600px',
            width: '600px'
        });
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
        this.loadItems();
    }



}
