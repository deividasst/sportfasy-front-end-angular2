import {Component, Input, OnInit} from '@angular/core';
import {Players} from '../../../shared/Players';

@Component({
    selector: 'app-grid-player',
    templateUrl: './grid-player.component.html',
    styleUrls: ['./grid-player.component.sass']
})
export class GridPlayerComponent implements OnInit {

    @Input()
    players: Players[];

    constructor() {
    }

    ngOnInit() {
    }

}
