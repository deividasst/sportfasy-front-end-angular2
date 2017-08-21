import {Component, Input, OnInit, Optional, Inject} from '@angular/core';
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
    teamArray:Array<any> = new Array
    playersArray:Array<any> = new Array;
    players: Players[];
    // Kendo grid params
    gridView: GridDataResult;
    //data: Object[];
    pageSize: number;
    teamTotals: any;
    skip: number;
    columns: any = [{'field': 'price', 'title': 'Price'},
        {'field': 'name',  'title': 'Player name'},
        {'field': 'surname', 'title': 'Player surname'}]


    constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
        private ds: DService,
                public dialog: MdDialog,
                private  kendoSettings: KendoUiSettings) {
        this.pageSize = this.kendoSettings.getPageSize();
        this.skip = this.kendoSettings.getSkip();
    }


    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }
    private loadItems(): void {
        this.gridView = {
            data: this.teamArray.slice(this.skip, this.skip + this.pageSize),
            total: this.teamArray.length
        };
    }


    // public showOnlyBeveragesDetails(dataItem: any, index: number): boolean {
    //     return dataItem._players !== [];
    // }
    getPlayers() {
        this.ds.getTeamPlayers().subscribe(player => {
            this.players = player;
            this.teamArray = [];
            this.teamArray = (this.players.map(function (obj) {
                return obj;
            }))
            this.compare();
            this.loadItems();
            console.log("array"+ this.teamArray);

        })
    }
    compare() {
        for (var i = 0; i < this.data._team._players.length; i++) {
            for (var j = 0; j < this.teamArray.length; j++) {
                if (this.data._team._players[i].name === this.teamArray[j].name) {
                    this.teamArray.splice(j, 1);
                    break;
                }
            }
        }
    }

    buy(dataItem){
        console.log("data", dataItem._id[0], "team id", this.data._team._id, "tournament id", this.data._tournament._id
            , "price", dataItem.price);
        const playerledger = ({
            tournament_id: this.data._tournament._id,
            team_id: this.data._team._id,
            player_id: dataItem._id[0],
            total_income: -dataItem.price
        });
        console.log("objektas "+(JSON.stringify(playerledger)));
        this.ds.SellPlayer(JSON.stringify(playerledger)).subscribe(object => {
        });
    }
    delete(dataItem){
        for(var i=0; i<this.teamArray.length; i++){
            if(this.teamArray[i].name == dataItem.name){
                this.teamArray.splice(i, 1);  //removes 1 element at position i
                this.loadItems();
                break;
            }
        }
    }

    ngOnInit() {
        this.getPlayers();
        this.playersArray.push(this.data._team._players);
        this.compare();
        this.loadItems();

        console.log(this.data._team._players);
    }



}

