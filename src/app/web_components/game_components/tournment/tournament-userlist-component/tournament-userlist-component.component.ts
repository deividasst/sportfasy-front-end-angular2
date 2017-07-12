import {Component, OnInit, Input, Inject} from '@angular/core';
import {Tournament} from '../../../shared/Tournament';
import {MD_DIALOG_DATA} from '@angular/material';
import {DService} from '../../../shared/data.srv';
import {Router} from '@angular/router';
import {SecurityTrimming} from '../../../shared/security-trimming.srv';


@Component({
    selector: 'app-tournament-userlist-component',
    templateUrl: './tournament-userlist-component.component.html',
    styleUrls: ['./tournament-userlist-component.component.scss']
})
export class TournamentUserlistComponentComponent implements OnInit {

    @Input()
    tournament: any;

    @Input()
    users: any;
    @Input()
    is_allowed: boolean;

    constructor(@Inject(MD_DIALOG_DATA) public data: any,
                private ds: DService,
                private router: Router,
                private securityTrimm: SecurityTrimming) {
        console.log('this is also must be id' + this.is_allowed);
    }

    delete(user) {
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
        this.ds.updateTournament(JSON.stringify(this.data)).subscribe(obj => {
            this.router.navigate(['/userprofile'])
        });

    }

    ngOnInit() {

    }


    conceal(user) {
        if (document.getElementById('userContent').style.display === 'block') {
            document.getElementById('userContent').style.display = 'none';
            document.getElementById('contentas1').style.display = 'none';

        }
    }

    show(user) {
        if (document.getElementById('userContent').style.display === 'none') {
            document.getElementById('userContent').innerHTML = 'Name: ' + user.name + '<br/>' + 'Surname: ' + user.surname + '<br/>' + 'Email: ' + user.email;
            document.getElementById('userContent').style.display = 'block';
            document.getElementById('contentas1').style.display = 'block';

        }
        console.log(user);
    }
}
