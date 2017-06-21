import {Http, Response} from '@angular/http'
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Headers, RequestOptions} from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from './User'
import 'rxjs/add/operator/catch'

@Injectable()

  export class DService {
  constructor(public http: Http) {
  }

  data;

  carsUrl: string = 'http://localhost:3000/api/users/registration';
//get funkcija parodyti visus uzsiregistravusius narius
  getData() {
    return this.http.get(this.carsUrl)
      .map((res: Response) => res.json().posts);
  }

//post funcija, registracijai
  registerUser(user: User) {
    return this.http.post(this.carsUrl, user, {  }).map(res =>  res.json()).catch(this.handleErrorObservable);
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
