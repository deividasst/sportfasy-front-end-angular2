import { Component, OnInit, Inject } from '@angular/core';
import { OverAllTournamentsWidgetComponent } from '../over-all-tournaments-widget/over-all-tournaments-widget.component'
import {MD_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-tournament-dialog',
  template: `<h1>tournament {{data.name}} info</h1>
  <h3>Max players allowed: {{data.players}}</h3>
  <h3>Max teams allowed: {{data.teams}}</h3>
  <h3>Tournament budget: {{data.budget}}</h3>
  <h4>tournament starts: {{data.start}}</h4> <br/>
  <h4>tournament ends: {{data.end}}</h4>
  <button class="btn btn-primary ">join</button>
  `,

  styleUrls: ['./tournament-dialog.component.sass']
})

export class TournamentDialogComponent implements OnInit {

    constructor(@Inject(MD_DIALOG_DATA) public data: any) { }
    ngOnInit() {
    }
}