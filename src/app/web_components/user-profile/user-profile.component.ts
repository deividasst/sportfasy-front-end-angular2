import { Component, OnInit } from '@angular/core';
import {DService} from '../shared/data.srv';
import {LogOutComponent} from '../sign_log/log-out/log-out.component';
import {TokenHolderServise} from '../shared/tokenholder.srv';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
  dataHolder = [];
  mailHolder: string;
  tokenEmail: string;
  constructor(private ds: DService, private logout: LogOutComponent,  private tokenHolder: TokenHolderServise) {
      this.tokenEmail = this.tokenHolder.getuserMail();
      this.mailHolder = this.tokenEmail;
  }

  ngOnInit() {
  }

  getUsers() {
    this.ds.getUsers()
      .subscribe(obj => {this.dataHolder.push(JSON.stringify(obj))} );
  }

  logOut() {
      this.logout.logOut();
  }

}
