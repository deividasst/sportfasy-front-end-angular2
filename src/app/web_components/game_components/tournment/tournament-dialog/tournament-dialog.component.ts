import { Component, OnInit, Inject } from '@angular/core';
import { OverAllTournamentsWidgetComponent } from '../over-all-tournaments-widget/over-all-tournaments-widget.component'
import {MD_DIALOG_DATA} from '@angular/material';
import {TournamentUserlistComponentComponent} from '../tournament-userlist-component/tournament-userlist-component.component';
import {DService} from '../../../shared/data.srv';


@Component({
  selector: 'app-tournament-dialog',
  template: `<div id="main"><h1>tournament  info</h1>
      <md-tab-group>
          <md-tab label="Main info">
              <h3>Max players allowed: {{data.max_players}}</h3>
              <h3>Max teams allowed: {{data.max_teams}}</h3>
              <h3>Tournament budget: {{data.budget}}</h3>
              <h4>tournament starts: {{data.start}}</h4> <br/>
              <h4>tournament ends: {{data.end}}</h4>
          </md-tab>
          <md-tab label="Tournament players">
              <h3>Players list: </h3>
              <div *ngFor="let post of dataa">
                  <app-tournament-userlist-component [post]="post" [dataa]="dataa"></app-tournament-userlist-component>
              </div>
          </md-tab>
      </md-tab-group>
  <button class="btn btn-primary ">join</button>
  </div>
  `,
  styleUrls: ['./tournament-dialog.component.sass']
})

export class TournamentDialogComponent implements OnInit {

    datas = [
    {name: this.data._users[0].name},
    {name: this.data._users[1].name},

]
    dataa: any;
    constructor(@Inject(MD_DIALOG_DATA) public data: any, private ds: DService) {
    }

    getTournaments(): void {
        this.ds.getAllTournaments().subscribe(tournament => {
            this.dataa = tournament
        })
    }
    ngOnInit() {
        this.getTournaments();
   }

}
