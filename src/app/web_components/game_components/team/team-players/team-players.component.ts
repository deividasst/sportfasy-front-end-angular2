import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-team-players',
    templateUrl: './team-players.component.html',
    styleUrls: ['./team-players.component.sass']
})
export class TeamPlayersComponent implements OnInit {
    @Input() players: any;


    constructor() {
    }

    ngOnInit() {
    }

}
