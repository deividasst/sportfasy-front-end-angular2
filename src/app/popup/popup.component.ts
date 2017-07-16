import { Component, OnInit, Inject } from '@angular/core';
import {MD_DIALOG_DATA, MdDialog} from '@angular/material';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass']
})
export class PopupComponent implements OnInit {

    constructor(@Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

    // closeDialog() {
    //     this.dialog.close();
    // }

}
