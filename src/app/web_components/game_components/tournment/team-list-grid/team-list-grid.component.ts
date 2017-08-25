import {Component, Inject, Input, OnInit} from '@angular/core';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';
import {DService} from '../../../shared/data.srv';
import {MdDialog} from '@angular/material';
import {SecurityTrimming} from '../../../shared/security-trimming.srv';
import {KendoUiSettings} from '../../../shared/kendo-ui-settings.srv';

@Component({
  selector: 'app-team-list-grid',
  templateUrl: './team-list-grid.component.html',
  styleUrls: ['./team-list-grid.component.sass']
})
export class TeamListGridComponent implements OnInit {
    @Input() tournament_team;
    // Kendo grid params
    gridView: GridDataResult;
    data: Object[];
    pageSize: number;
    skip: number;

    constructor(private ds: DService,
                public dialog: MdDialog,
                private secureTrim: SecurityTrimming,
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
            data: this.tournament_team.slice(this.skip, this.skip + this.pageSize),
            total: this.tournament_team.length
        };
    }

    ngOnInit() {
        this.loadItems();
        console.log(JSON.stringify(this.tournament_team) + "tournament team cia")
    }
}
