import {Component, OnInit, Input, Inject, Injectable, Optional} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {Team} from '../../../shared/Team';
import {DService} from '../../../shared/data.srv';

@Component({
  selector: 'app-tournament-team-component',
  templateUrl: './tournament-team-component.component.html',
  styleUrls: ['./tournament-team-component.component.sass']
})
export class TournamentTeamComponentComponent implements OnInit {
    @Input()
    teams: Team[];
    teamArray: any[];
    teamSomething: any;

    teaminfo: any;
    kazkas: any;

  constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
              private ds: DService,
  ) { this.kazkas = data._users;
      console.log(data._id, 'cia yra DATA');
      this.getTournamentTeamsbyID(data._id); }

  ngOnInit() {
  }

    getTournamentTeamsbyID(tournamentID): void {
        this.ds.getTournamentTeamsbyID(tournamentID).subscribe(team => {
            this.teams = team;

            this.teamArray = (team.map(function (obj) {
                return obj._team;


            }));

             console.log(this.teamArray, 'the Teams')
        })
    }

}
