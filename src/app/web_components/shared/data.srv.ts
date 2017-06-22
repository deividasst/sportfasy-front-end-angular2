import {Http, Response} from '@angular/http'
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Headers, RequestOptions} from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from './User'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';

@Injectable()

  export class DService {
  constructor(public http: Http, public router: Router){ }
   data;

       carsUrl : string = 'http://localhost:3000/api/users/registration';
//get funkcija parodyti visus uzsiregistravusius narius
      getData() {
         return this.http.get(this.carsUrl)
           .map((res: Response) => res.json().posts);
             
       }

//post funcija, registracijai
      /*registerUser(user: User) {
             return this.http.post(this.carsUrl, user, {  }).map(res =>  res.json()).
             catch(this.errorHandler);
  }
  errorHandler(error: Response) {
      console.error(error);
      let message = `Errors status code ${error.status} at ${error.url}`
      return Observable.throw(message);
  }*/
  registerUser(user: User) {
         return this.http.post(this.carsUrl, user, {  }).map(res => {
           this.router.navigate(['login']);
                if (res) {
                    if (res.status === 200) {
                        return [{ status: res.status, json: res.json() }]
                    }}}).
         catch((error: any) => {
           if (error.status === 409){
             return Observable.throw(new Error('user already exist!'));
               
            


        }
        else if (error.status === 500){
          return Observable.throw(new Error('while creating new user!'));
       }
        else if (error.status === 200){
          return Observable.throw(new Error('Success creating new user!'));
       }
       else if (error.status === 403){
         return Observable.throw(new Error('Failed to authenticate token.'));
      }
});
}
}
