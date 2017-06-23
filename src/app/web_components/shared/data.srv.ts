import {Http, Response} from '@angular/http'
import {Component, Injectable} from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class DService {
  data;


  constructor(public http: Http) {
  }

  getData() {
    return this.http.get('/users')
      .map((res: Response) => res.json().posts);
  }

  registerUser(url: string, user: string) {
    return this.http.post(url, user).map(res => res.json());
  }

  loginUser(url: string, user: string) {

    return this.http.post(url, user).map(res => res.json());
  }
}
