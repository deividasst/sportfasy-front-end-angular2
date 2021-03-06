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


    getAllTeams() {
        return this.http.get('/api/tournament/teams').map(res => res.json());
    }

    getAllTournaments() {
        return this.http.get('/api/tournaments').map(res => res.json());
    }

    getTournament(tournament_id: string) {
        return this.http.get(`/api/tournaments/?tournament_id=${tournament_id}`).map(res => res.json())
    }

    updateTournament(tournament: string) {
        return this.http.put('/api/tournaments', tournament).map(res => res.json());
    }

    updateTeam(team: string) {
        return this.http.put('/api/teams', team).map(res => res.json());
    }

    getMyTeams(id: string) {
        return this.http.get(`/api/teams/?team_master_id=${id}`).map(res => res.json());
    }

    getUserTurnaments(userID): any {
        return this.http.get(`/api/tournaments/?userID=${userID}`).map(res => res.json())
    }

    teamResults(team_master_id, ended_tournaments): any {
        return this.http.get(`/api/teams/?team_master_id=${team_master_id}&ended_tournaments=${ended_tournaments}`).map(res => res.json());
        // http://localhost:3000     /api/teams/?team_master_id=597bb8685663bd209&ended_tournaments=true
    }

    getTournamentTeams(teamMaster): any {
        return this.http.get(`/api/tournament/teams/?teamMaster=${teamMaster}`).map(res => res.json())
    }

    getTeamPlayers() {
        return this.http.get('/api/player').map(res => res.json());
    }

    TeamToTournament(tournament_teams: string) {
        return this.http.post('/api/tournament/teams', tournament_teams).map(res => res.json())

    }

    SellPlayer(playersLedger: string) {
        return this.http.post('/api/tournament/players_ledger', playersLedger).map(res => res.json())
    }

    postPlayersLedger(players_ledger): any {
        return this.http.post('/api/tournament/players_ledger', players_ledger).map(res => res.json())
    }

    postUserLedger(user_ledger): any {
        return this.http.post('/api/userledger', user_ledger).map(res => res.json())
    }

    getUserLedger(user_id): any {
        return this.http.get(`/api/userledger/?user_id=${user_id}`).map(res => res.json())
    }

    buy_team_players(team_players: string) {
        return this.http.post('/api/team/players/', team_players).map(res => res.json())
    }

    sell_team_players(team_players: string) {
        return this.http.put('/api/team/players/', team_players).map(res => res.json())

    }
}

