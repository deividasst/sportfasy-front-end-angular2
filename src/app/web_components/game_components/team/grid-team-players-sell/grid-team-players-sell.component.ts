import {Component, Input, OnInit} from '@angular/core';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';
import {DService} from '../../../shared/data.srv';
import {KendoUiSettings} from '../../../shared/kendo-ui-settings.srv';
import {Team} from '../../../shared/Team';
import {Tournament_teams} from '../../../shared/Tournament-teams';
import {MdDialog} from '@angular/material';
import {Players} from '../../../shared/Players'
import {TeamDialogComponent} from '../team-dialog/team-dialog.component';
@Component({
    selector: 'app-grid-team-players-sell',
    templateUrl: './grid-team-players-sell.component.html',
    styleUrls: ['./grid-team-players-sell.component.sass']
})
export class GridTeamPlayersSellComponent implements OnInit {
    @Input()
    players: Players[];
    // Kendo grid params
    gridView: GridDataResult;
    data: Object[];
    pageSize: number;
    skip: number;
    columns: any = [{'field': 'name', 'title': 'Name'},
        {'field': 'surname',  'title': 'Surname'},
        {'field': 'price.name', 'title': 'Price'}]


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
        // this.gridView = {
        //     data: this.players.slice(this.skip, this.skip + this.pageSize),
        //     total: this.players.length
        // };
    }

    // public showOnlyBeveragesDetails(dataItem: any, index: number): boolean {
    //     return dataItem._players !== [];
    // }

    ngOnInit() {
        this.loadItems();
        console.log("there are players"+ this.players);
    }



}