import {Component, Inject, Input, OnInit} from '@angular/core';
import {Tournament} from '../../../shared/Tournament';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';
import {DService} from '../../../shared/data.srv';
import {MdDialog} from '@angular/material';
import {SecurityTrimming} from '../../../shared/security-trimming.srv';
import {KendoUiSettings} from '../../../shared/kendo-ui-settings.srv';
import {TournamentDialogComponent} from '../tournament-dialog/tournament-dialog.component';

@Component({
    selector: 'app-grid-tournaments',
    templateUrl: './grid-tournaments.component.html',
    styleUrls: ['./grid-tournaments.component.sass']
})
export class GridTournamentsComponent implements OnInit {

    // Kendo grid params
    gridView: GridDataResult;
    data: Object[];
    pageSize: number;
    skip: number;

    @Input()
    tournaments: Tournament[];

    constructor(private ds: DService,
                public dialog: MdDialog,
                private secureTrim: SecurityTrimming,
                private  kendoSettings: KendoUiSettings) {
        this.pageSize = this.kendoSettings.getPageSize();
        this.skip = this.kendoSettings.getSkip();
    }

    openDialog(tournament) {

        const dialogRef = this.dialog.open(TournamentDialogComponent, {
            data: tournament,
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
            data: this.tournaments.slice(this.skip, this.skip + this.pageSize),
            total: this.tournaments.length
        };
    }

    ngOnInit() {
        this.loadItems();
    }

}
