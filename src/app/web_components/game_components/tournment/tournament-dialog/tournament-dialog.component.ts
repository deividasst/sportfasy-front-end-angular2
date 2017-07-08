import { Component, OnInit, Inject } from '@angular/core';
import { OverAllTournamentsWidgetComponent } from '../over-all-tournaments-widget/over-all-tournaments-widget.component'
import {MD_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-tournament-dialog',
  template: `<div id="main"><h1>tournament {{data.name}} info</h1>
      <md-tab-group>
          <md-tab label="Main info">
              <h3>Max players allowed: {{data.players}}</h3>
              <h3>Max teams allowed: {{data.teams}}</h3>
              <h3>Tournament budget: {{data.budget}}</h3>
              <h4>tournament starts: {{data.start}}</h4> <br/>
              <h4>tournament ends: {{data.end}}</h4>
              <h4> players: {{data.users}}</h4>
          </md-tab>
          <md-tab label="Tournament players">
              <h3>Players list:</h3>
              <ul>
                  <li>Player1</li>
                  <li>Player2</li>
                  <li>Player3</li>
              </ul>
          </md-tab>
      </md-tab-group>
  <button class="btn btn-primary ">join</button>
  </div>
  `,

  styleUrls: ['./tournament-dialog.component.sass']
})

export class TournamentDialogComponent implements OnInit {

    constructor(@Inject(MD_DIALOG_DATA) public data: any) { }
    ngOnInit() {
    }
}