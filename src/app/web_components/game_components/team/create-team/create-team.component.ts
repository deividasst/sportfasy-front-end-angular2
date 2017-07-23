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
//cia tures buti itemai, kurie nurodyti turnyre, ir jie turi atsidurti per create team mygtuka, kuris atsius to turnyro kuriam kuriama teama info: budget max plaers in team kuris bus reikalingas happen funkcijai
  constructor(private ds: DService) {

   }
       getPlayers(): void {
         this.ds.getTeamPlayers().subscribe(player => {this.players = player})
    }
happen(){
  if(this.list.length > 3){ //cia atkeliaus inputas is tournament kuris nustatys koks turi buti komandos dydis nustatytas tame turnyre
    console.log('per daug');
    //disable add button
  }
  console.log(this.list.length);
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
