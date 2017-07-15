import {Http, Response} from '@angular/http'
import {Component, Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {TokenHolderServise} from "./tokenholder.srv";
import {Tournament} from "./Tournament";


@Injectable()
export class SecurityTrimming {
    private _master_in_tournaments: any;

    constructor(private tokenHolder: TokenHolderServise) {
    }

    getMastersTournaments(): any {
        return this._master_in_tournaments;
    }

    setMastersTournaments(tournaments: any) {
        // console.log('tournamentai ' + JSON.stringify({data: tournaments}, null, 4));
        this._master_in_tournaments = tournaments.map(tournament => {
            if (tournament.tournament_master === this.tokenHolder.getUserID()) {
                // console.log(tournament._id);
                return tournament._id;
            }
        });
        // console.log('lis of masters: ' + this._master_in_tournaments);
        // console.log('user id  ' + this.tokenHolder.getUserID());
        console.log('master tournamentai ' + JSON.stringify({data: this._master_in_tournaments}, null, 4));
    }

    isAllowedMasterRights(tournamentId) {
        // console.log('master in tournaments: ' + this._master_in_tournaments);
        if (this._master_in_tournaments.indexOf(tournamentId) !== -1) {
            return true;
        };
    }
}
