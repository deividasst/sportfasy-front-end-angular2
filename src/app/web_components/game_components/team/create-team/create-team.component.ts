import {Component, OnInit, Inject} from '@angular/core';
import {DService} from '../../../shared/data.srv';
import {Router} from '@angular/router';
import {TokenHolderServise} from '../../../shared/tokenholder.srv';
import {LogOutComponent} from '../../../sign_log/log-out/log-out.component';
import {Team} from '../../../shared/Team'
import {Players} from '../../../shared/Players'
import {Tournament} from '../../../shared/Tournament'
@Component({
    selector: 'app-create-team',
    templateUrl: './create-team.component.html',
    styleUrls: ['./create-team.component.sass']
})
export class CreateTeamComponent implements OnInit {
    players: Players[];
    list: Array<any> = new Array;
    tournaments: Tournament[];
    team: Team;
    list2
    userId: string;
    playermuch: number;
    i: number;
    err;
    public opened;

//cia tures buti itemai, kurie nurodyti turnyre, ir jie turi atsidurti per create team mygtuka, kuris atsius to turnyro kuriam kuriama teama info: budget max plaers in team kuris bus reikalingas happen funkcijai
    constructor(private ds: DService,
                private tokenHolder: TokenHolderServise,
                private router: Router,) {

    }

    public close() {
        this.opened = false;
    }

    public open() {
        this.opened = true;
    }

    loginti(tournament) {
        console.log(tournament.max_players);
        console.log(tournament.name);
        return this.playermuch = tournament.max_players
    }

    getPlayers(): void {
        this.ds.getTeamPlayers().subscribe(player => {
            this.players = player
        })
    }

    getUserTurnaments(userId): void {
        this.ds.getUserTurnaments(userId).subscribe(tournament => {
            this.tournaments = tournament
        });
    }

    happen() {
        if (this.list.length >= this.playermuch) { //cia atkeliaus inputas is tournament kuris nustatys koks turi buti komandos dydis nustatytas tame turnyre
            console.log('per daug');
            document.getElementById('preventas').classList.add('prevent');
            document.getElementById('out1').innerHTML = "Your team is full "
        }
        else {
        }

        console.log(this.list.length);
    }

    addPlayer(player) {

        if (this.list.indexOf(player) == -1) {
            this.list.push(player);
            console.log(this.list);
            this.list2 = (this.list.map(item => " " + item.name)
                .filter((value, index, self) => self.indexOf(value) === index))
            document.getElementById('out').innerHTML = "Current team is:  " + this.list2;
        } else
            alert("You can't add this player twice");
    }

    removePlayer(player) {
        for (var i = this.list.length; i--;) {
            if (this.list[i] === player) {
                this.list.splice(i, 1);
                alert("removed");
                console.log(this.list);
                this.list2 = (this.list.map(item => item.name)
                    .filter((value, index, self) => self.indexOf(value) === index))
                document.getElementById('out').innerHTML = "Current team is:  " + this.list2;
                document.getElementById('preventas').classList.remove('prevent');
                document.getElementById('out1').innerHTML = ""
            }
        }
    }


    ngOnInit() {
        this.team = new Team();
        this.getPlayers();
        this.tokenHolder.idChange$.subscribe(item => {
            this.userId = item;
            this.getUserTurnaments(item);
            this.team._team_master = item;
        });

    }

    sendTeam(team) {
        this.team._players = this.list
        this.ds.registerTeam(JSON.stringify(this.team))
            .subscribe(obj => {
                this.router.navigate(['/userprofile'])
            }, err => this.err = 'Tournament with this name already exists')
    }
}
