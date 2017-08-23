import {Component, Input, OnInit, Optional, Inject, EventEmitter, Output} from '@angular/core';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';
import {DService} from '../../../shared/data.srv';
import {KendoUiSettings} from '../../../shared/kendo-ui-settings.srv';
import {Team} from '../../../shared/Team';
import {Tournament_teams} from '../../../shared/Tournament-teams';
import {MdDialog} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';
import {Players} from '../../../shared/Players'
import {TeamDialogComponent} from '../team-dialog/team-dialog.component';
@Component({
    selector: 'app-grid-team-players-sell',
    templateUrl: './grid-team-players-sell.component.html',
    styleUrls: ['./grid-team-players-sell.component.sass']
})
export class GridTeamPlayersSellComponent implements OnInit {
    teamArray: Array<any> = new Array
    playersArray: Array<any> = new Array;
    boughtPlayers: Array<any> = new Array;
    @Input()
    input_players: Players[];
    players: Players[];
    // Kendo grid params
    gridView: GridDataResult;
    // data: Object[];
    pageSize: number;
    teamTotals: any;
    skip: number;
    columns: any = [{'field': 'price', 'title': 'Price'},
        {'field': 'name', 'title': 'Player name'},
        {'field': 'surname', 'title': 'Player surname'}]

    @Output() boughtPlayer: EventEmitter<any>;

    constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
                private ds: DService,
                public dialog: MdDialog,
                private  kendoSettings: KendoUiSettings) {
        this.pageSize = this.kendoSettings.getPageSize();
        this.skip = this.kendoSettings.getSkip();
        this.boughtPlayer = new EventEmitter();
    }

    changeFreePlayerList(freePlayers: Players[]) {
        console.log('change free player list' + freePlayers.length);
        this.players = freePlayers;
        this.loadItems();
    }

    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

    private loadItems(): void {
        this.gridView = {
            data: this.players.slice(this.skip, this.skip + this.pageSize),
            total: this.players.length
        };
    }

    buy(dataItem) {
        const playerledger = ({
            tournament_id: this.data._tournament._id,
            team_id: this.data._team._id,
            player_id: dataItem._id[0],
            total_income: -dataItem.price
        });
        this.ds.SellPlayer(JSON.stringify(playerledger)).subscribe(object => {
        });
    }

    delete(dataItem) {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].name == dataItem.name) {
                this.players.splice(i, 1);
                 this.boughtPlayer.emit(dataItem);
                this.loadItems();
                break;
            }
        }
        this.loadItems();
        this.boughtPlayers = (this.data._team._players.map(function (obj) {
            return obj._id;
        }));
        const teamObject = ({
            name: this.data._team.name,
            _players: this.boughtPlayers
        });
        this.ds.updateTeam(JSON.stringify(teamObject)).subscribe(obj => {

        });
    }

    ngOnInit() {
        this.players = this.input_players;
        this.loadItems();
    }
}

