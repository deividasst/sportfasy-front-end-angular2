import {Component, Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TokenHolderServise {

    token: any;
    userID: any;
    userEmail: any;
    userName: any;


    constructor() {
}

    getToken() {
        return this.token;
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
        localStorage.setItem('id_user', JSON.stringify(id_user));
        localStorage.setItem('email_user', JSON.stringify(email_user));
        localStorage.setItem('name_user', JSON.stringify(name_user));
  }
}
