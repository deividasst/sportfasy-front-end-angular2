import {Http, Response} from '@angular/http'
import {Component, Injectable} from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class TokenHolderServise {
  private token: string;
  private _userMail: string;
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

    setuserMail(value: string) {
        this._userMail = value;
    }
}
