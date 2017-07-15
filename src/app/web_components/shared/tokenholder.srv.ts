import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import set = Reflect.set;


@Injectable()
export class TokenHolderServise {

    token: any;
    _userID: any;
    _userEmail: any;
    _userName: any;
    // Observable sources
    private _nameChange = new ReplaySubject<string>();
    private _idChange = new ReplaySubject<string>();
    private _emailChange = new ReplaySubject<string>();

    // Observable streams
    nameChange$ = this._nameChange.asObservable();
    idChange$ = this._idChange.asObservable();
    emailChange$ = this._emailChange.asObservable();

    constructor() {
    }

    getToken() {
        return this.token;
    }

    setToken(value: any): void {
        this.token = value;
        localStorage.setItem('id_token', value);
    }

    getUserID(): any {
        return this._userID;
    }

    setUserID(value: any) {
        this._userID = value;
        this._idChange.next(value);
    }

    getEmail() {
        return this._userEmail;
    }

    setUserEmail(value: any) {
        this._userEmail = value;
    }

    getUserName() {
        return this._userName;
    }

    setUserName(value: any) {
        this._userName = value;
        this._nameChange.next(value);
    }

    storeUserData(token, id_user, email_user, name_user) {
        this.setUserEmail(email_user);
        this.setUserName(name_user);
        this.setUserID(id_user);
        this.setToken(token);
    }
}
