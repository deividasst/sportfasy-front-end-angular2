import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/User'
import { DService } from '../../shared/data.srv';
import { InterceptedHttp } from '../../shared/Interceptor.srv';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass'],
  providers: [DService]
})
export class LogInComponent implements OnInit {
  user: User;
  responseStatus: Object= [];
  status: boolean;
  dataHolder= [];

  constructor(private ds: DService) {
    this.user = new User();
    this.user.name = 'First Name';
    this.user.surname = 'Last Name';
    this.user.password = 'kinlock';
    this.user.email = 'kemmalis013949ou86';

  }

  ngOnInit() {
  }

  loginUser(user) {
    console.log('try to log in user' );
    this.ds.loginUser('/api/login', this.user.toString())
      .subscribe(obj  => this.dataHolder);
  }

}
