import {Component, Inject, Input, OnInit} from '@angular/core';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';
import {MdDialog} from '@angular/material';
import {Tournament} from '../shared/Tournament';
import {DService} from '../shared/data.srv';
import {KendoUiSettings} from '../shared/kendo-ui-settings.srv';
import {SecurityTrimming} from '../shared/security-trimming.srv';
import {TournamentDialogComponent} from '../game_components/tournment/tournament-dialog/tournament-dialog.component';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {

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

    function(){

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