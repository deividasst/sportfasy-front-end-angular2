<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {DService} from '../../../shared/data.srv';
import {Tournament} from '../../../shared/Tournament'
import {MdDialog, MdDialogRef} from '@angular/material';
import {TournamentDialogComponent} from '../tournament-dialog/tournament-dialog.component'
import {MD_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';
import {PopupComponent} from '../../../../popup/popup.component';
import {SecurityTrimming} from '../../../shared/security-trimming.srv';

@Component({
    selector: 'app-over-all-tournaments-widget',
    templateUrl: './over-all-tournaments-widget.component.html',
    styleUrls: ['./over-all-tournaments-widget.component.sass']
})
export class OverAllTournamentsWidgetComponent implements OnInit {
    tournaments: Tournament[];
    constructor(private ds: DService,
                public dialog: MdDialog,
                private router: Router,
                private secureTrim: SecurityTrimming) {
    }

    openDialog(tournament) {

        const dialogRef = this.dialog.open(TournamentDialogComponent, {
            data: tournament,
            height: '600px',
            width: '600px'
        });
    }

    sugestToJoinTournament() {
        const dialogRef = this.dialog.open(PopupComponent, {
            // height: '400px',
            // width: '800px'
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
        // this.sugestToJoinTournament();
    }

}
=======
import {Component, OnInit} from '@angular/core';
import {DService} from '../../../shared/data.srv';
import {Tournament} from '../../../shared/Tournament'
import {MdDialog, MdDialogRef} from '@angular/material';
import {TournamentDialogComponent} from '../tournament-dialog/tournament-dialog.component'
import {MD_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';
import {PopupComponent} from '../../../../popup/popup.component';
import {SecurityTrimming} from '../../../shared/security-trimming.srv';

@Component({
    selector: 'app-over-all-tournaments-widget',
    templateUrl: './over-all-tournaments-widget.component.html',
    styleUrls: ['./over-all-tournaments-widget.component.sass']
})
export class OverAllTournamentsWidgetComponent implements OnInit {
    tournaments: Tournament[];
    constructor(private ds: DService,
                public dialog: MdDialog,
                private router: Router,
                private secureTrim: SecurityTrimming) {
    }

    openDialog(tournament) {

        const dialogRef = this.dialog.open(TournamentDialogComponent, {
            data: tournament,
            height: '600px',
            width: '600px'
        });
    }

    sugestToJoinTournament() {
        const dialogRef = this.dialog.open(PopupComponent, {
            // height: '400px',
            // width: '800px'
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
        // this.sugestToJoinTournament();
    }

}
>>>>>>> 587cdac7a0dc4f56f9217caa81a799a70f7ca327
