import {Component, OnInit} from '@angular/core';
//import {DatepickerModule} from 'angular2-material-datepicker'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DService} from '../../../shared/data.srv';
import {Observable} from 'rxjs/Observable';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms'
import { DatepickerModule } from 'ngx-bootstrap';

import {Tournament} from '../../../shared/Tournament'
@Component({
    selector: 'app-creat-tournment',
    templateUrl: './creat-tournment.component.html',
    styleUrls: ['./creat-tournment.component.sass'],
    providers: [DService]
})
export class CreatTournmentComponent implements OnInit {
    tournament: Tournament;
    minDate = new Date(2017, 5);
    dataHolder = [];
    public getDate(): number {
        return this.tournament.start && this.tournament.start.getTime() || new Date().getTime();
    }
    public getDate2(): number {
        return this.tournament.end && this.tournament.end.getTime() || new Date().getTime();
    }


    constructor(piker: DatepickerModule, private ds: DService, private router: Router) {
    }

    ngOnInit() {
        this.tournament = new Tournament();
    }
    save(model: Tournament, isValid: boolean) {
        // call API to save customer
        console.log(model, isValid);
    }


    addTournament(tournament) {
        this.ds.registerTournament(JSON.stringify(this.tournament))
            .subscribe(obj => this.dataHolder);
    }

}
