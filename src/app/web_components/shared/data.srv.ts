import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'


@Injectable()
export class DService {
    private _url: string = "http://localhost:3000/api/users"
    constructor(private _http: Http){}

getDataFromLocalHost() {
  return this._http.get(this._url)
  .map((res: Response) => res.json());
    }
//getCommentsLocalHost(postID) {
//  return this.http.get(`http://localhost:3000/comments/
    //${postID} `).map((res: Response) => res.json());
//}
}
