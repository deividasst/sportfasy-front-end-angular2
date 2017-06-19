import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'


@Injectable()

export class DService {

 constructor(public http: Http) {

 }
data;
 getData() {
  return this.http.get('http://localhost:3000/api/users')
    .map((res: Response) => res.json().posts);
}


/*
makePost(): void {
this.http.post(
'http://localhost:3000/api/users',
JSON.stringify({
 name: "laura",
 surname: "laura",
 password: "123546",
 email: "laura@gmail.com"
}))
.subscribe((res: Response) => {
this.data = res.json();

});
}
*/
}
