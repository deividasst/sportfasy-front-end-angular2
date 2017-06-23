import {Http, Response} from '@angular/http'
import {Component, Injectable} from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class TokenHolderServise {
  private _token;


  constructor() {
  }

  get token() {
    return this._token;
  }

  set token(value) {
    this._token = value;
  }
}
