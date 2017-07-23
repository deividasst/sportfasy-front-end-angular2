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
  list: Array<any> = new Array;
  list2

  constructor(private ds: DService) {

   }
       getPlayers(): void {
         this.ds.getTeamPlayers().subscribe(player => {this.players = player})
    }

addPlayer(player) {

  if (this.list.indexOf(player) == -1) {
    this.list.push(player);
     console.log(this.list);
     this.list2 = (this.list.map(item => item.name)
  .filter((value, index, self) => self.indexOf(value) === index))
  document.getElementById('out').innerHTML = "Current team is:  " + this.list2;
}else
  alert("You can't add this player twice");
}

  removePlayer(player) {
      for(var i = this.list.length; i--;) {
          if(this.list[i] === player) {
              this.list.splice(i, 1);
              alert("removed");
              console.log(this.list);
                   this.list2 = (this.list.map(item => item.name)
                  .filter((value, index, self) => self.indexOf(value) === index))
                  document.getElementById('out').innerHTML = "Current team is:  " + this.list2;
          }
      }
  }

  ngOnInit() {
     this.getPlayers();
  }
}
