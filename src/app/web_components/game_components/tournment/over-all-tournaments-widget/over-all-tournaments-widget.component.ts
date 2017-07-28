import {Component, OnInit, Injectable} from '@angular/core';
import {DService} from '../../../shared/data.srv';
import {Tournament} from '../../../shared/Tournament'
import {MdDialog, MdDialogRef} from '@angular/material';
import {TournamentDialogComponent} from '../tournament-dialog/tournament-dialog.component'
import {SecurityTrimming} from '../../../shared/security-trimming.srv';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';

@Injectable()
@Component({
    selector: 'app-over-all-tournaments-widget',
    templateUrl: './over-all-tournaments-widget.component.html',
    styleUrls: ['./over-all-tournaments-widget.component.sass']
})
export class OverAllTournamentsWidgetComponent implements OnInit {
    tournaments: Tournament[];
    gridView: GridDataResult;
    data: Object[];
    pageSize = 3;
    skip = 0;

    constructor(private ds: DService,
                public dialog: MdDialog,
                private secureTrim: SecurityTrimming) {
    }

    openDialog(tournament) {

        const dialogRef = this.dialog.open(TournamentDialogComponent, {
            data: tournament,
            height: '600px',
            width: '600px'
        });
    }

    getTournaments(): void {
        this.ds.getAllTournaments().subscribe(tournament => {
            this.tournaments = tournament;
            this.loadItems();
            this.secureTrim.setMastersTournaments(tournament);
        })
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
        this.getTournaments();
    }
}
