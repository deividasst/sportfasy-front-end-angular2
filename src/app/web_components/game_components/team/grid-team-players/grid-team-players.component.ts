import {Component, Input,Inject, OnInit, Optional} from '@angular/core';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';
import {DService} from '../../../shared/data.srv';
import {Router} from '@angular/router';
import {Team} from '../../../shared/Team';
import {PlayersLedger} from '../../../shared/PlayersLedger';
import {Tournament_teams} from '../../../shared/Tournament-teams';
import {MD_DIALOG_DATA, MdDialog} from '@angular/material';
import {TeamDialogComponent} from '../team-dialog/team-dialog.component';
import {KendoUiSettings} from '../../../shared/kendo-ui-settings.srv';
@Component({
    selector: 'app-grid-team-players',
    templateUrl: './grid-team-players.component.html',
    styleUrls: ['./grid-team-players.component.sass']
})
export class GridTeamPlayersComponent implements OnInit {
    @Input()
    team
    tournament_teams : Tournament_teams[];
    players: any;
    // Kendo grid params
    gridView: GridDataResult;
    pageSize: number;
    list: Array<any> = new Array;
    listas: Array<any> = new Array;
    skip: number;

    // columns: any = [{'field': '.data_team._players.name', 'title': 'Players'},
    //    {'field': 'data._team_master.name',  'title': 'Income'}
    //     //{'field': '_tournament.name', 'title': 'Tournaments'}
    //     ]


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
            data: this.data._team._players.slice(this.skip, this.skip + this.pageSize),
            total: this.data._team._players.length
        };
    }

    public showOnlyBeveragesDetails(dataItem: any, index: number): boolean {
        return dataItem._players !== [];
    }
    sell(dataItem){
        console.log("data", dataItem._id[0], "team id", this.data._team._id, "tournament id", this.data._tournament._id
        , "price", dataItem.price);
        const playerledger = ({
            tournament_id: this.data._tournament._id,
            team_id: this.data._team._id,
            player_id: dataItem._id[0],
            total_income: dataItem.price
        });
        console.log("objektas "+(JSON.stringify(playerledger)));
        this.ds.SellPlayer(JSON.stringify(playerledger)).subscribe(object => {
        });
    }
    delete(dataItem){
        for(var i=0; i<this.data._team._players.length; i++){
            if(this.data._team._players[i].name == dataItem.name){
                this.data._team._players.splice(i, 1);  //removes 1 element at position i
                this.loadItems();

                break;
            }
        }

        console.log(this.data._team._players);
        this.listas = (this.data._team._players.map(function (obj) {
            return obj._id;
        }));
        console.log(this.listas);
         const teamObject = ({
            name: this.data._team.name,
            _players: this.listas
        });
         console.log(JSON.stringify(teamObject));
        this.ds.updateTeam(JSON.stringify(teamObject)).subscribe(obj => {

        });
    }



    ngOnInit() {
        this.loadItems();
        console.log(this.data)
        this.list.push(this.data);
        console.log("cia yra listasssssss"+ this.data._team._players[0].name);
    }



}
