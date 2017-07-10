import { Component, OnInit, Input, Inject } from '@angular/core';
import {Tournament} from '../../../shared/Tournament';
import {MD_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-tournament-userlist-component',
  templateUrl: './tournament-userlist-component.component.html',
  styleUrls: ['./tournament-userlist-component.component.scss']
})
export class TournamentUserlistComponentComponent implements OnInit {

    @Input()
    post: any;

    @Input()
    dataa: any;

    constructor(@Inject(MD_DIALOG_DATA) public data: any) { }

    delete() {
        const index = this.dataa.indexOf(this.post);
        this.dataa.splice(index, 1);
    }
  ngOnInit() {
  }

}
