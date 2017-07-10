import { Component, OnInit, Input, Inject } from '@angular/core';
import {Tournament} from '../../../shared/Tournament';
import {MD_DIALOG_DATA} from '@angular/material';
import {DService} from '../../../shared/data.srv';
import {Router} from '@angular/router';



@Component({
  selector: 'app-tournament-userlist-component',
  templateUrl: './tournament-userlist-component.component.html',
  styleUrls: ['./tournament-userlist-component.component.scss']
})
export class TournamentUserlistComponentComponent implements OnInit {

    @Input()
    tournament: any;

    constructor(@Inject(MD_DIALOG_DATA) public data: any, private ds: DService, private router: Router) { }

    delete(user) {
        const index = this.tournament.indexOf(user);
        this.tournament.splice(index, 1);
        this.ds.updateTournament(JSON.stringify(this.data)).subscribe(obj => {this.router.navigate(['/userprofile'])});

    }
  ngOnInit() {

  }

}
