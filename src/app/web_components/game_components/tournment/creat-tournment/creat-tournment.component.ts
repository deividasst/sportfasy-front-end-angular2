import {Component, OnInit} from '@angular/core';
// import {DatepickerModule} from 'angular2-material-datepicker'
import {DService} from '../../../shared/data.srv';
import {Router} from '@angular/router';
import {DatepickerModule} from 'ngx-bootstrap';
import {TokenHolderServise} from '../../../shared/tokenholder.srv';
import {LogOutComponent} from '../../../sign_log/log-out/log-out.component';
import {Tournament} from '../../../shared/Tournament'

@Component({
    selector: 'app-creat-tournment',
    templateUrl: './creat-tournment.component.html',
    styleUrls: ['./creat-tournment.component.sass'],
})
export class CreatTournmentComponent implements OnInit {
    tournament: Tournament;

    minDate = new Date(2017, 5);
    err;
    tokenEmail: string;

    public getDate(): number {
        return this.tournament.start && this.tournament.start.getTime() || new Date().getTime();
    }

    public getDate2(): number {
        return this.tournament.end && this.tournament.end.getTime() || new Date().getTime();
    }

    constructor(piker: DatepickerModule,
                private ds: DService,
                private router: Router,
                private tokenHolder: TokenHolderServise,
                private logout: LogOutComponent) {
        this.tokenEmail = this.tokenHolder.getEmail();
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
            .subscribe(obj => {
                this.router.navigate(['/userprofile'])
            }, err => this.err = 'Tournament with this name already exists')
    }
}