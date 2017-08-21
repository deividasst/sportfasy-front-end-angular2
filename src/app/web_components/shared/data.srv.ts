import {Http, Response} from '@angular/http'
import {Component, Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DService {

    constructor(public http: Http) {
    }

    getUserCredentials() {
        return this.http.get('/api/users')
            .map((res: Response) => res.json());
    }

    registerUser(user: string) {
        return this.http.post('/api/users', user).map(res => res.json());
    }

    loginUser(user: string) {
        return this.http.post('/api/login', user).map(res => res.json());
    }

    registerTournament(tournament: string) {
        return this.http.post('/api/tournaments', tournament).map(res => res.json());
    }
    registerTeam(team: string) {
        return this.http.post('/api/teams', team).map(res => res.json());
    }

    logOutUser() {
        return this.http.get('/api/logout').map(res => res.json());
    }

    getAllTeams() {
        return this.http.get('/api/tournament/teams').map(res => res.json());
    }

    getAllTournaments() {
        return this.http.get('/api/tournaments').map(res => res.json());
    }
    getTournament(name: string) {
        return this.http.get(`api/tournaments/?name=${name}`).map(res => res.json())
    }

    updateTournament(tournament: string) {
        return this.http.put('/api/tournaments', tournament).map(res => res.json());
    }
    updateTeam(team: string) {
        return this.http.put('/api/teams', team).map(res => res.json());
    }
    getTeamTotal(id: string) {
        return this.http.get(`/api/teams/?team_id=${id}`).map(res => res.json());
    }

    getUserTurnaments(userID): any {
        return this.http.get(`/api/tournaments/?userID=${userID}`).map(res => res.json())
    }
    getTournamentTeams(teamMaster): any {
        return this.http.get(`/api/tournament/teams/?teamMaster=${teamMaster}`).map(res => res.json())
    }
    getTeamPlayers() {
       return this.http.get('/api/player').map(res => res.json());
    }
    TeamToTournament(tournament_teams: string){
        return this.http.post('/api/tournament/teams', tournament_teams).map(res => res.json())

    }
    SellPlayer(playersLedger: string){
        return this.http.post('/api/tournament/players_ledger', playersLedger).map(res => res.json())

    }
}

