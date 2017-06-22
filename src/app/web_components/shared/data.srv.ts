import {Http, Response} from '@angular/http'
import {Component, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Headers, RequestOptions} from '@angular/http';
import {FormGroup, FormControl} from '@angular/forms';
import {User} from './User'
import {InterceptedHttp} from './Interceptor.srv'



@Injectable()
export class DService {
  data;

  carsUrl = 'http://localhost:3000/api/users';

  constructor(public http: Http, public interceptor: InterceptedHttp) {
  }


  // get funkcija parodyti visus uzsiregistravusius narius
  getData() {
    return this.http.get(this.carsUrl)
      .map((res: Response) => res.json().posts);
  }

// post funcija, registracijai
  registerUser(user: User) {
    return this.http.post(this.carsUrl, user, {}).map(res => res.json());
  }

  // post function login
  loginUser(url: string, user: string) {
    return this.interceptor.post(url, user).map(res => res.json());


  }
}
