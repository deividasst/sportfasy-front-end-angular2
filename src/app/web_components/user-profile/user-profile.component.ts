import {Component, Inject, Injectable, Input, OnInit} from '@angular/core';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';
import {MdDialog} from '@angular/material';
import {Tournament} from '../shared/Tournament';
import {DService} from '../shared/data.srv';
import {KendoUiSettings} from '../shared/kendo-ui-settings.srv';
import {Team} from '../shared/Team';
import {TokenHolderServise} from '../shared/tokenholder.srv';

@Injectable()
@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {

    @Input() tournament_team;

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

    // team results gets team master id
    ngOnInit() {
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

                // this.teamResults(this.tokenHolder.getUserID(), true);
            }
        });
    }

    teamResults(team_master_id, ended_tournaments) {
        console.log('user profile team resultls');
        this.ds.teamResults(team_master_id, ended_tournaments).subscribe(team => {
            this.teams = team;
        })
    }
}
