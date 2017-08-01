import {Component, OnInit, Injectable} from '@angular/core';
import {DService} from '../../../shared/data.srv';
import {KendoUiSettings} from '../../../shared/kendo-ui-settings.srv';
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

    constructor(private ds: DService,
                public dialog: MdDialog,
                private secureTrim: SecurityTrimming,
                private  kendoSettings: KendoUiSettings) {
    }

    getTournaments(): void {
        this.ds.getAllTournaments().subscribe(tournament => {
            this.tournaments = tournament;
            this.secureTrim.setMastersTournaments(tournament);
        })
    }

    ngOnInit() {
        this.getTournaments();
    }
}
