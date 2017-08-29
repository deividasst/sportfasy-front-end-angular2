import {Component, Inject, Input, OnInit} from '@angular/core';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';
import {MdDialog} from '@angular/material';
import {Team} from '../shared/Team';
import {Tournament_teams} from '../shared/Tournament-teams';
import {DService} from '../shared/data.srv';
import {KendoUiSettings} from '../shared/kendo-ui-settings.srv';
import {Tournament} from "../shared/Tournament";
import {TokenHolderServise} from "../shared/tokenholder.srv";

@Component({
    selector: 'app-grid-user-profile',
    templateUrl: './grid-user-profile.component.html',
    styleUrls: ['./grid-user-profile.component.sass']
})
export class GridUserProfileComponent implements OnInit {
    @Input() tournaments: Tournament[];
    @Input() teams: Team[];

    usrObject: any;
    teamID: string;
    tournamentID: string;
    points: number;
    usrID: string;
    usr_points_status: any;
    button_status: boolean;
    flag: boolean;
    players: any;
    // Kendo grid params
    gridView: GridDataResult;
    data: Object[];
    pageSize: number;
    skip: number;
    columns: any = [{'field': '_team.name', 'title': 'Team name'},
        {'field': '_tournament.name', 'title': 'Tournament name'},
        {'field': 'position', 'title': 'Team position'},
        {'field': 'team_total', 'title': 'Budget'}]


    constructor(private ds: DService,
                public dialog: MdDialog,
                private tokenHolder: TokenHolderServise,
                private  kendoSettings: KendoUiSettings) {
        this.pageSize = this.kendoSettings.getPageSize();
        this.skip = this.kendoSettings.getSkip();
        this.button_status = true;
    }

    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

    private loadItems(): void {
        this.gridView = {
            data: this.teams.slice(this.skip, this.skip + this.pageSize),
            total: this.teams.length
        };
    }

    // It will be for claim points
    sendData(dataItem) {
        if (dataItem._team.user_points_converted === false) {
            switch (dataItem.position) {
                case 1:
                    this.points = 13;
                    break;
                case 2:
                    this.points = 8;
                    break;
                case 3:
                    this.points = 5;
                    break;
                default:
                    return this.points = 0;
            }

            this.tokenHolder.idChange$.subscribe(item => {
                this.usrID = item;
            });
            this.teamID = dataItem._team._id;
            console.log(this.teamID, 'teamID')
            this.tournamentID = dataItem._tournament._id;
            console.log(this.tournamentID, 'tournamentID');

            this.usrObject = ({
                user_ID: this.usrID,
                points: this.points,
                team_ID: this.teamID,
                tournament_ID: this.tournamentID
            });

            this.ds.postUserLedger(JSON.stringify(this.usrObject)).subscribe(obj => {
            });
            console.log(dataItem, ' click');

            // Send status to back then points are converted
            this.flag = true;
            this.usr_points_status = ({
                name: dataItem._team.name,
                user_points_converted: this.flag
            });
            this.ds.updateTeam(JSON.stringify(this.usr_points_status)).subscribe(obj => {
            });
            this.button_status = false;
        }
    }
    activateClasss(dataItem) {
        dataItem.active = !dataItem.active;
    }

    ngOnInit() {
        this.loadItems();
    }
}
