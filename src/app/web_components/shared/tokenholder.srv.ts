import {Http, Response} from '@angular/http'
import {Component, Injectable} from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class TokenHolderServise {
  private token: string;
  private _userMail: string;
  private _userID: string;
  constructor() {
  }

  getToken() {
    return this.token;
  }

  setToken(value) {
    this.token = value;
  }

     getuserMail(): string {
        return this._userMail;
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
}
