import {Component, OnInit, Injectable} from '@angular/core';
import {User} from '../../shared/User'
import {DService} from '../../shared/data.srv';
import {TokenHolderServise} from '../../shared/tokenholder.srv';
import {Router} from '@angular/router';
import {PointsHolderServise} from '../../shared/pointsholder';

@Injectable()
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
    userID;
    points;
    p;


    constructor(private ds: DService,
                private tokenHolder: TokenHolderServise,
                private pointsHolder: PointsHolderServise,
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
                            this.ds.getUserLedger(obj.userID).subscribe(points => {
                                if (typeof points[0] !== 'undefined') {
                                    this.points = points[0].sum;
                                    console.log(this.points + " taskai");

                                } else {
                                    this.points = 0;
                                    console.log(this.points + " taskai");
                                }
                                console.log(this.points + " ikjk");
                                this.pointsHolder.setPoints(this.points);
                        });
                    }
                },
                err => this.error = 'Email or password invalid. Please try again.');
    }
}
