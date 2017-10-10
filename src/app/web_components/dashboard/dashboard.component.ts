import {Component, Inject, Injectable, Input, OnInit} from '@angular/core';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';
import {MdDialog} from '@angular/material';
import {Tournament} from '../shared/Tournament';
import {DService} from '../shared/data.srv';
import {KendoUiSettings} from '../shared/kendo-ui-settings.srv';
import {Team} from '../shared/Team';
import {TokenHolderServise} from '../shared/tokenholder.srv';
import {PopupComponent} from '../../popup/popup.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.sass']
})

export class DashboardComponent implements OnInit {
    userId: string;
    tournaments: Tournament[];
    teams: Team[];

    // Kendo grid params
    gridView: GridDataResult;
    data: Object[];
    pageSize: number;
    skip: number;

    constructor(private ds: DService,
                public dialog: MdDialog,
                private  kendoSettings: KendoUiSettings,
                private tokenHolder: TokenHolderServise) {
        this.pageSize = this.kendoSettings.getPageSize();
        this.skip = this.kendoSettings.getSkip();
    }

    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
    }

    ngOnInit() {
        this.tokenHolder.idChange$.first().subscribe(item => {
            this.userId = item;
            this.getUserTurnaments(item);
        });
        this.tokenHolder.idChange$.subscribe(userID => {
            if (userID) {
                // console.log('user profile token: ' + localStorage.getItem('id_token'));
                // console.log('user profile tokenHolder: ' + this.tokenHolder.getToken());
                if (localStorage.getItem('id_token')) {
                    console.log('token in local storage');
                    this.teamResults(userID, true);
                } else {
                    this.tokenHolder.tokenChange$.subscribe(token => {
                        console.log('token from subcribe');
                        console.log('token from subcribe tokenHolder: ' + token);
                        this.teamResults(userID, true);
                    })
                }
            }
        });
    }

    getUserTurnaments(userId): void {
        this.ds.getUserTurnaments(userId).subscribe(tournament => {
            if (tournament.length === 0) {
                this.sugestToJoinTournament();
            }
        });
    }

    sugestToJoinTournament(): void {
        const dialogRef = this.dialog.open(PopupComponent);
    }

    teamResults(team_master_id, ended_tournaments) {
        console.log('user profile team resultls');
        this.ds.teamResults(team_master_id, ended_tournaments).subscribe(team => {
            this.teams = team;
        })
    }
}
