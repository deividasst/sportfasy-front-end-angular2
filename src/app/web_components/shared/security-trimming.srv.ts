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

    setMastersTournaments(tournaments: Tournament[]) {
        console.log('tournaments ' + tournaments);
        this._master_in_tournaments = tournaments.map(tournament => {
            console.log('tournament._tournament_master ' + JSON.stringify({data : tournament._tournament_master}, null, 4));
            if (tournament._tournament_master._id === this.tokenHolder.getUserID()) {
                console.log('tournament._id ' + tournament._id);
                return tournament._id;
            }

        });
        console.log('_master_in_tournaments ' + this._master_in_tournaments );
        console.log('this.tokenHolder.getUserID() ' + this.tokenHolder.getUserID() );
    }

    isAllowedMasterRights(tournamentId) {
        if (this._master_in_tournaments.indexOf(tournamentId) !== -1) {
            return true;
        }
    }
}

