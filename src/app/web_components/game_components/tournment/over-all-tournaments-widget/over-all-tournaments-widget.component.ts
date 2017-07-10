import {Component, OnInit} from '@angular/core';
import {DService} from '../../../shared/data.srv';
import {Tournament} from '../../../shared/Tournament'
import {MdDialog, MdDialogRef} from '@angular/material';
import {TournamentDialogComponent} from '../tournament-dialog/tournament-dialog.component'
import {MD_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';

@Component({
    selector: 'app-over-all-tournaments-widget',
    templateUrl: './over-all-tournaments-widget.component.html',
    styleUrls: ['./over-all-tournaments-widget.component.sass']
})
export class OverAllTournamentsWidgetComponent implements OnInit {
    tournaments: Tournament[];

    constructor(private ds: DService, public dialog: MdDialog, private router: Router) {
    }
    openDialog(tournament) {

        const dialogRef = this.dialog.open(TournamentDialogComponent, {
            data: tournament,
            height: '400px',
            width: '600px'
        });
        console.log(tournament);
    }

    getTournaments(): void {
        this.ds.getAllTournaments().subscribe(tournament => {
            this.tournaments = tournament
        })
    }

    ngOnInit() {
        this.getTournaments();
    }

}
