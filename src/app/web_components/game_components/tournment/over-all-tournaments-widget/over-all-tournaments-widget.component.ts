import {Component, OnInit} from '@angular/core';
import {DService} from '../../../shared/data.srv';
import {Tournament} from '../../../shared/Tournament'

@Component({
    selector: 'app-over-all-tournaments-widget',
    templateUrl: './over-all-tournaments-widget.component.html',
    styleUrls: ['./over-all-tournaments-widget.component.sass']
})
export class OverAllTournamentsWidgetComponent implements OnInit {
    tournaments: Tournament[];

    constructor(private ds: DService) {
    }

    getTournaments(): void {
        this.ds.getAllTournaments().subscribe(tournament => {
            this.tournaments = tournament
        })
    }
    getData(tournament: object) {
        console.log(tournament);
    };
    ngOnInit() {
        this.getTournaments();
    }

}
