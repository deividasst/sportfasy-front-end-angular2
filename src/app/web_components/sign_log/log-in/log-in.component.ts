import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/User'
import {DService} from '../../shared/data.srv';
import {TokenHolderServise} from '../../shared/tokenholder.srv';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass'],
  providers: [DService]
})
export class LogInComponent implements OnInit {
  user: User;
  responseStatus: Object = [];
  status: boolean;
  dataHolder = [];

  constructor(private ds: DService, private tokenHolder: TokenHolderServise) {

  }

  ngOnInit() {
    this.user = new User();
    this.user.name = 'First Name';
    this.user.surname = 'Last Name';
    this.user.password = 'kinlock';
    this.user.email = 'kemmalis013949ou86';
  }

  loginUser(user) {
    console.log('try to log in user');
    this.ds.loginUser('/api/login', JSON.stringify(this.user))
      .subscribe(obj => this.tokenHolder.setToken(obj.token));
  }

}
