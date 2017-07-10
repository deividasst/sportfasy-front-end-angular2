import { Component, OnInit, Inject} from '@angular/core';
import { OverAllTournamentsWidgetComponent } from '../over-all-tournaments-widget/over-all-tournaments-widget.component'
import {MD_DIALOG_DATA} from '@angular/material';
import {TournamentUserlistComponentComponent} from '../tournament-userlist-component/tournament-userlist-component.component';
import {DService} from '../../../shared/data.srv';
import { Pipe} from '@angular/core';


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
              <div >
                  <app-tournament-userlist-component [tournament]="tournament" ></app-tournament-userlist-component>
              </div>
          </md-tab>
      </md-tab-group>
  <button class="btn btn-primary ">join</button>
  </div>
  `,
  styleUrls: ['./tournament-dialog.component.sass']
})

export class TournamentDialogComponent implements OnInit {
    tournament: any;

    constructor(@Inject(MD_DIALOG_DATA) public data: any, private ds: DService) {
        this.tournament = data._users;
    }

    ngOnInit() {

    }

}