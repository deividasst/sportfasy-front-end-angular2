import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'


@Injectable()
export class DService {

  constructor(private http: Http) {

  }

getDataFromLocalHost() {
  return this.http.get('http://localhost:3000/posts').map((res: Response) => res.json());
}

getCommentsLocalHost(postID) {
  return this.http.get(`http://localhost:3000/comments/
    ${postID} `).map((res: Response) => res.json());
}
}
