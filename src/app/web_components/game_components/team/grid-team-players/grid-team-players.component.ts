import {
    Component, Input, Inject, OnInit, Optional, OnChanges, SimpleChanges, Output,
    EventEmitter
} from '@angular/core';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';
import {DService} from '../../../shared/data.srv';
import {Tournament_teams} from '../../../shared/Tournament-teams';
import {MD_DIALOG_DATA, MdDialog} from '@angular/material';
import {KendoUiSettings} from '../../../shared/kendo-ui-settings.srv';
import {Players} from '../../../shared/Players';
@Component({
    selector: 'app-grid-team-players',
    templateUrl: './grid-team-players.component.html',
    styleUrls: ['./grid-team-players.component.sass'],

})
export class GridTeamPlayersComponent implements OnInit {
    @Input() team: any;
    tournament_teams: Tournament_teams[];
    players: Players[];
    // Kendo grid params
    gridView: GridDataResult;
    pageSize: number;
    list: Array<any> = new Array;
    listas: Array<any> = new Array;
    skip: number;
    @Output() soldPlayer: EventEmitter<any>;
    @Output() remainedPlayersInTeam: EventEmitter<any>;

    columns: any = [{'field': 'price', 'title': 'Price'},
        {'field': 'name', 'title': 'Name'},
        {'field': 'surname', 'title': 'Surname'},
    ]


    constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
                private ds: DService,
                public dialog: MdDialog,
                private  kendoSettings: KendoUiSettings) {
        this.pageSize = this.kendoSettings.getPageSize();
        this.skip = this.kendoSettings.getSkip();
        this.remainedPlayersInTeam = new EventEmitter();
        this.soldPlayer = new EventEmitter();
    }

    pushPlayerToTeam(player: any) {
        this.data._team._players.push(player);
        this.loadItems();
    }


    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

    private loadItems(): void {
        this.gridView = {
            data: this.data._team._players.slice(this.skip, this.skip + this.pageSize),
            total: this.data._team._players.length
        };
    }


    public showOnlyBeveragesDetails(dataItem: any, index: number): boolean {
        return dataItem._players !== [];
    }

    sell(dataItem) {
        const playerledger = ({
            tournament_id: this.data._tournament._id,
            team_id: this.data._team._id,
            player_id: dataItem._id[0],
            total_income: dataItem.price
        });
        this.ds.SellPlayer(JSON.stringify(playerledger)).subscribe(object => {
        });

        const team_players = {
            _team: this.data._team._id,
            _player: dataItem._id[0],
            sell_p: dataItem.price
        };
        this.ds.sell_team_players(JSON.stringify(team_players)).subscribe(object => {
        });
    }

    delete(dataItem) {
        for (let i = 0; i < this.data._team._players.length; i++) {
            if (this.data._team._players[i].name == dataItem.name) {
                this.data._team._players.splice(i, 1);  // removes 1 element at position i
                this.loadItems();
                this.remainedPlayersInTeam.emit(this.data._team._players);
                this.soldPlayer.emit(dataItem);
                break;
            }
        }
        this.listas = (this.data._team._players.map(function (obj) {
            return obj._id;
        }));
        const teamObject = ({
            name: this.data._team.name,
            _players: this.listas
        });
        this.ds.updateTeam(JSON.stringify(teamObject)).subscribe(obj => {

        });
    }


    ngOnInit() {
        this.loadItems();
        this.list.push(this.data);
    }


}
