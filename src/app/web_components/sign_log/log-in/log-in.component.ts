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
    name_user: any;


    constructor(private ds: DService,
                private tokenHolder: TokenHolderServise,
                private router: Router) {
        this.tokenHolder.setUserName('');
    }

    ngOnInit() {
        this.user = new User();
        this.user.password = '123456';
        this.user.email = 'root@gmail.com';
        localStorage.removeItem('id_token');
        this.tokenHolder.setUserName('');
        localStorage.clear();
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
