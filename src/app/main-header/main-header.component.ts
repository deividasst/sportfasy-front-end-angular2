import { Component, OnInit } from '@angular/core';
import {LogOutComponent} from '../web_components/sign_log/log-out/log-out.component';
import {DService} from '../web_components/shared/data.srv';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.sass']
})
export class MainHeaderComponent implements OnInit {
    public opened;

    public close() {
        this.opened = false;
    }

    public open() {
        this.opened = true;
    }

  constructor(private ds: DService,
              private logout: LogOutComponent) { }

  ngOnInit() {
  }

    logOut(): void {
        this.logout.logOut();
        this.opened = false;
    }

}
