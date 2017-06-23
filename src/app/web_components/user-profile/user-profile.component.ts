import { Component, OnInit } from '@angular/core';
import {DService} from '../shared/data.srv';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {

  dataHolder= [];
  constructor(private ds: DService) {
  }

  ngOnInit() {

  }

  getUsers() {
    this.ds.getUsers()
      .subscribe(obj => this.dataHolder);
  }

}
