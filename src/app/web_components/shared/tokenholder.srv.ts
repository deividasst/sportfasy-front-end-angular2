import {Component, Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TokenHolderServise {
    // private token: string;
    private _userMail: string;
    private _userID: string;

    token: any;
    userID: any;
    userEmail: any;
    userName: any;


    constructor() {
    }

    getToken() {
        return this.token;
    }

    setuserMail(value: string): void {
        this._userMail = value;
    }


    getUserID(): string {
        return this._userID;
    }

    setUserID(value: string): void {
        this._userID = value;
    }

    getID() {
        return this.userID;
    }

    getEmail() {
        return this.userEmail;
    }

    getName() {
        return this.userName;
    }


    storeUserData(value, id_user, email_user, name_user) {
        this.token = value;
        this.userID = id_user;
        this.userEmail = email_user;
        this.userName = name_user;
        localStorage.setItem('id_token', value);
        localStorage.setItem('id_user', id_user);
        localStorage.setItem('email_user', email_user);
        localStorage.setItem('name_user', name_user);
    }
}
