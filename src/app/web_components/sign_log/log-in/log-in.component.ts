import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/User'
import {DService} from '../../shared/data.srv';
import {TokenHolderServise} from '../../shared/tokenholder.srv';
import {Router} from '@angular/router';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.sass'],
    providers: [DService]
})
export class LogInComponent implements OnInit {
    user: User;
    error;
    id_user: any;
    email_user: any;
    name_user: any;
    surname_user: any;

    constructor(private ds: DService, private tokenHolder: TokenHolderServise, private router: Router) {
    }

    ngOnInit() {
        this.user = new User();
        this.user.password = '123456';
        this.user.email = 'root@gmail.com';
    }

    loginUser(user): void {
        this.ds.loginUser(JSON.stringify(this.user))
            .subscribe(
                obj => {
                    if (obj.success) {
                        this.tokenHolder.storeUserData(
                            obj.token,
                            obj.userID,
                            obj.userEmail,
                            obj.userName,
                            obj.userSurname),
                            this.router.navigate(['/dashboard'])
                    }
                },
                err => this.error = 'Email or password invalid. Please try again.');
    }
}
