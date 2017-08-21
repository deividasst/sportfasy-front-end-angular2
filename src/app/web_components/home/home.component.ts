import { Component, OnInit } from '@angular/core';
import {LogOutComponent} from '../sign_log/log-out/log-out.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {
  constructor( private logout: LogOutComponent) {
      this.logOut();

  }

  ngOnInit() {
      this.logOut();
  }
    logOut(): void {
        this.logout.logOut();
    }
}
