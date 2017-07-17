import {Http, Response} from '@angular/http'
import {Component, Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {TokenHolderServise} from './tokenholder.srv';
import {Tournament} from './Tournament';


@Injectable()
export class SecurityTrimming {
    private _master_in_tournaments: any;

    constructor(private tokenHolder: TokenHolderServise) {
    }

    getMastersTournaments(): any {
        return this._master_in_tournaments;
    }

    setMastersTournaments(tournaments: [Tournament]) {
        this._master_in_tournaments = tournaments.map(tournament => {
            if (tournament._tournament_master === this.tokenHolder.getUserID()) {
                return tournament._id;
            }
        });
    }

    isAllowedMasterRights(tournamentId) {
        console.log(this._master_in_tournaments);
        if (this._master_in_tournaments.indexOf(tournamentId) !== -1) {
            return true;
        }
        ;
    }
}

