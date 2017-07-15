import {Component, EventEmitter, Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Injectable()
export class TokenHolderServise {
    // private _userMail: string;
    // private _userID: string;
    private _navItemSource = new BehaviorSubject<string>(null);
    navItem$ = this._navItemSource.asObservable();
    token: any;
    userID: any;
    userEmail: any;
    public userName: any;

    constructor() {
    }

    getToken() {
        return this.token;
    }

    setToken(value: any): void {
        this.token = value;
        localStorage.setItem('id_token', value);
    }

    // setuserMail(value: string): void {
    //     this._userMail = value;
    // }


    getUserID(): string {
        return this.userID;
    }

    setUserID(value: string): void {
        this.userID = value;
    }

    getID() {
        return this.userID;
    }

    getEmail() {
        return this.userEmail;
    }


    setUserEmail(value: any) {
        this.userEmail = value;
    }

    getName() {
        return this.userName;
    }


    setUserName(value: any) {
        this.userName = value;
        this._navItemSource.next(value);
    }

    storeUserData(value, id_user, email_user, name_user) {
        this.token = value;
        this.userID = id_user;
        this.userEmail = email_user;
        this.userName = this.setUserName(name_user);
        localStorage.setItem('id_token', value);
        // localStorage.setItem('id_user', id_user);
        // localStorage.setItem('email_user', email_user);
        // localStorage.setItem('name_user', name_user);
    }
}
