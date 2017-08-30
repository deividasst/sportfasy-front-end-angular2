import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import set = Reflect.set;


@Injectable()
export class TokenHolderServise {

    token: any;
    _userID: string;
    _userEmail: string;
    _userName: string;
    _userSurname: string;
    // Observable sources
    public _nameChange = new ReplaySubject<string>();
    private _idChange = new ReplaySubject<string>();
    private _emailChange = new ReplaySubject<string>();
    private _surnameChange = new ReplaySubject<string>();
    private _tokenChange = new ReplaySubject<string>();

    // Observable streams
    nameChange$ = this._nameChange.asObservable();
    idChange$ = this._idChange.asObservable();
    emailChange$ = this._emailChange.asObservable();
    surnameChange$ = this._surnameChange.asObservable();
    tokenChange$ = this._tokenChange.asObservable();

    constructor() {
    }

    getToken() {
        return this.token;
    }

    setToken(value: any): void {
        this.token = value;
        localStorage.setItem('id_token', value);
        this._tokenChange.next(value);
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

    setUserSurname(value: any) {
        this._userSurname = value;
        this._surnameChange.next(value);
    }

    getUserSurname() {
        return this._userSurname;
    }

    getUserName() {
        return this._userName;
    }

    setUserName(value: any) {
        this._userName = value;
        this._nameChange.next(value);
    }

    storeUserData(token, id_user, email_user, name_user, surname_user) {
        this.setToken(token);
        this.setUserEmail(email_user);
        this.setUserName(name_user);
        this.setUserID(id_user);
        this.setUserSurname(surname_user);
    }
}
