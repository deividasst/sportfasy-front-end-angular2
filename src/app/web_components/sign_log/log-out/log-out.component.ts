import {Component, OnInit, Injectable} from '@angular/core';
import {DService} from '../../shared/data.srv';
import {TokenHolderServise} from '../../shared/tokenholder.srv';
import {Router} from '@angular/router';

@Injectable()
@Component({
    selector: 'app-log-out',
    templateUrl: './log-out.component.html',
    styleUrls: ['./log-out.component.sass']
})

export class LogOutComponent implements OnInit {

    constructor(private ds: DService, private tokenHolder: TokenHolderServise, private router: Router) {
    }

    ngOnInit() {
    }

    logOut() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('id_user');
        localStorage.removeItem('email_user');
        localStorage.removeItem('name_user');
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}
