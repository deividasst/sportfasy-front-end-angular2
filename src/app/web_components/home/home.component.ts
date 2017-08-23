import { Component, OnInit } from '@angular/core';
import {TokenHolderServise} from '../shared/tokenholder.srv';
import {DService} from "app/web_components/shared/data.srv";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {
    name: string;
  constructor(private tokenHolder: TokenHolderServise, private ds: DService) {
  }
  ngOnInit() {

  }

}
