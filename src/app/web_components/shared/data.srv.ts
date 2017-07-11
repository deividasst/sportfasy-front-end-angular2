import {Http, Response} from '@angular/http'
import {Component, Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DService {

    constructor(public http: Http) {
    }

    getUsers() {
        return this.http.get('/api/users/registration')
            .map((res: Response) => res.json());
    }

    registerUser(user: string) {
        return this.http.post('/api/users/registration', user).map(res => res.json());
    }

    loginUser(user: string) {
        return this.http.post('/api/login', user).map(res => res.json());
    }

    registerTournament(tournament: string) {
        return this.http.post('/api/tournaments', tournament).map(res => res.json());
    }

    logOutUser() {
        return this.http.get('/api/logout').map(res => res.json());
    }

    getAllTeams() {
        return this.http.get('/api/teams').map(res => res.json());
    }

    getAllTournaments() {
        return this.http.get('/api/tournaments').map(res => res.json());
    }

    updateTournament(tournament: string) {
        return this.http.put('/api/tournaments', tournament).map(res => res.json());
    }

    getUserTurnaments(userID): any {
        return this.http.get(`/api/tournaments/?userID=${userID}`).map(res => res.json())
    }
}

