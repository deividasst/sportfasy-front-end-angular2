import { Component, OnInit } from '@angular/core';
import {DService} from '../../../shared/data.srv';
import {Router} from '@angular/router';
import {TokenHolderServise} from '../../../shared/tokenholder.srv';
import {LogOutComponent} from '../../../sign_log/log-out/log-out.component';
import {Team} from '../../../shared/Team'
import {Players} from '../../../shared/Players'
@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.sass']
})
export class CreateTeamComponent implements OnInit {
  players: Players[];
  constructor(private ds: DService) {

   }
       getPlayers(): void {
         this.ds.getTeamPlayers().subscribe(player => {this.players = player})
    }

  ngOnInit() {
     this.getPlayers();
  }
}
