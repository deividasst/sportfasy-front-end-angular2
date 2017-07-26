import {Component, OnInit, Injectable} from '@angular/core';
import {DService} from '../../../shared/data.srv';
import {Tournament} from '../../../shared/Tournament'
import {MdDialog, MdDialogRef} from '@angular/material';
import {TournamentDialogComponent} from '../tournament-dialog/tournament-dialog.component'
import {SecurityTrimming} from '../../../shared/security-trimming.srv';

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
            this.secureTrim.setMastersTournaments(tournament);
        })
    }

    ngOnInit() {
        this.getTournaments();
    }
}
