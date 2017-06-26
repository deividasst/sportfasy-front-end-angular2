import {Http, Response} from '@angular/http'
import {Component, Injectable} from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class TokenHolderServise {
  private _token: string;

  constructor() {
  }

  getToken() {
    return this._token;
  }

  setToken(value) {
    this._token = value;
  }
}
