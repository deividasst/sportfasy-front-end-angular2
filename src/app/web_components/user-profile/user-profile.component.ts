import { Component, OnInit } from '@angular/core';
import { Http } from'@angular/http';
import {DService} from '../shared/data.srv';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

 itemList=[];

  data;

  constructor(private http:Http) {
    this.http.get('http://localhost:3000/api/users').subscribe(res => this.data = res.json());
  }

  Show(){
    this.itemList = this.data;
  }

  ngOnInit() {

  }

}
