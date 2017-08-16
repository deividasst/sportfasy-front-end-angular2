import {Component, Input,Inject, OnInit, Optional} from '@angular/core';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';
import {DService} from '../../../shared/data.srv';
import {KendoUiSettings} from '../../../shared/kendo-ui-settings.srv';
import {Team} from '../../../shared/Team';
import {Tournament_teams} from '../../../shared/Tournament-teams';
import {MD_DIALOG_DATA, MdDialog} from '@angular/material';
import {TeamDialogComponent} from '../team-dialog/team-dialog.component';
@Component({
    selector: 'app-grid-team-players',
    templateUrl: './grid-team-players.component.html',
    styleUrls: ['./grid-team-players.component.sass']
})
export class GridTeamPlayersComponent implements OnInit {
    @Input()
    team
    tournament_teams : Tournament_teams[];
    players: any;
    // Kendo grid params
    gridView: GridDataResult;
    pageSize: number;
    list: Array<any> = new Array;
    skip: number;

    columns: any = [{'field': 'data._team._players', 'title': 'Name'},
        {'field': 'data._team_master.name',  'title': 'Team master'},
        {'field': '_tournament.name', 'title': 'Tournaments'}]


    constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
        private ds: DService,
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
            data: this.list.slice(this.skip, this.skip + this.pageSize),
            total: this.list.length
        };
    }

    public showOnlyBeveragesDetails(dataItem: any, index: number): boolean {
        return dataItem._players !== [];
    }

    ngOnInit() {
        this.loadItems();
        console.log(this.data)
        this.list.push(this.data);
        console.log("cia yra listasssssss"+ this.data._team._players[0].name);
    }



}