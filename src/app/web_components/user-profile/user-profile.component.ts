import { Component, OnInit } from '@angular/core';
import {DService} from '../shared/data.srv';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  template:`<h2>Uers</h2>
  <ul> *ngFor="let employee of employee">
      <li>{{employe.name}}</li>
  </ul>`
})
export class UserProfileComponent implements OnInit {


  constructor(private _ds: DService) {
  }

  get_ds(): DService {
    return this._ds;
  }

  ngOnInit() {
  
  }

}
