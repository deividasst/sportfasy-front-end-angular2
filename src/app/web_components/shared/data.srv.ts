import {Http, Response} from '@angular/http'
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Headers, RequestOptions} from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Hero }  from 'app/web_components/sign_log/sing-up/hero'


@Injectable()

  export class DService {
  constructor(public http: Http){ }
   data;

       carsUrl : string = 'http://localhost:3000/api/users';

        getData() {
         return this.http.get(this.carsUrl)
           .map((res: Response) => res.json().posts);
       }


       add (name: string) {
       const headers = new Headers({ 'Content-Type': 'application/json' });
       const options = new RequestOptions({ headers: headers });
       const user =      {
       'name': 'aurimas',
        'surname': 'aurimas',
        'password': 'aurimas',
        'email': 'aurimas@gmail.com'
          };
        return this.http.post(this.carsUrl,user , options)
             .map(this.extractData);
           }

        private extractData(res: Response) {
        const body = res.json();
        return body.data || { };
        }

 }
