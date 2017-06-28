import {Http, Response} from '@angular/http'
import {Component, Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DService {

    constructor(public http: Http) {
    }

    getUsers() {
        return this.http.get('/api/users')
            .map((res: Response) => res.json());
    }

    registerUser(user: string) {
        return this.http.post('/api/users/registration', user).map(res => res.json());
    }

    loginUser(user: string) {
        return this.http.post('/api/login', user).map(res => res.json());
    }

    logOutUser() {
        return this.http.get('/api/logout').map(res => res.json());
    }

    getAllTeams() {
        return this.http.get('/api/teams').map(res => res.json());
    }
}


