import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'


@Injectable()

export class DService {

 constructor(public http: Http) {

 }

 getData() {
  return this.http.get('http://localhost:3000/api/users')
    .map((res: Response) => res.json().posts);
}

}
