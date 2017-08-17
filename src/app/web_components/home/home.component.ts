import { Component, OnInit } from '@angular/core';
import {TokenHolderServise} from "../shared/tokenholder.srv";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  constructor(private tokenHolder: TokenHolderServise) {
      this.tokenHolder.setToken('');
  }
  ngOnInit() {

  }

}
