import {Component, OnInit, Inject} from '@angular/core';
import {DService} from '../../../shared/data.srv';
import {Router} from '@angular/router';
import {TokenHolderServise} from '../../../shared/tokenholder.srv';
import {LogOutComponent} from '../../../sign_log/log-out/log-out.component';
import {Team} from '../../../shared/Team'
import {Players} from '../../../shared/Players'
import {Tournament} from '../../../shared/Tournament'
import {Tournament_teams} from '../../../shared/Tournament-teams'
@Component({
    selector: 'app-create-team',
    templateUrl: './create-team.component.html',
    styleUrls: ['./create-team.component.sass']
})
export class CreateTeamComponent implements OnInit {
    players: Players[];
    list: Array<any> = new Array;
    tournaments: Tournament [];
    team: Team;
    list2
    userId: string;
    playermuch: number;
    i: number;
    usrObject: any;
    err;
    error;
    tournament_budget: number;
    tournament_name: string;
    tournament_team_object: any;
    tournament_id: any;
    disabled: boolean = true;
    remove_disable: boolean = true;
    public listItems: Array<string> = new Array;
    name


    constructor(private ds: DService,
                private tokenHolder: TokenHolderServise,
                private router: Router,) {

    }
    removeDisable(){
        this.remove_disable = !this.remove_disable;

    }

    calculate() {
        let sum = 0
        for (let i = 0; i < this.list.length; i++) {
            sum += this.list[i].price;
        }
        if (sum <= this.tournament_budget){
            return true
        }
        else if (sum == 0) {
            return true
        }
        else {
            console.log('virsija fakkk')
            return false
        }
    }

    activateClass(tournament) {
        tournament.active = !tournament.active;
    }

    activateClasss(player) {
        player.active = !player.active;
    }

    // activateClassss(player){
    //     player.active1=! player.active1;
    // }

    loginti(tournament) {
        console.log(tournament.max_players);
        console.log(tournament);
        console.log(tournament.budget);
        console.log(tournament._id);
        this.disabled = !this.disabled
        return this.tournament_name = tournament.name, this.tournament_budget = tournament.budget, this.tournament_id = tournament._id
    }
    public selectionChange(name: any): void {
        for (let i = 0; i < this.tournaments.length; i++) {
            if (this.tournaments[i].name === name) {
                this.loginti(this.tournaments[i])
            }
        }
    }

    getPlayers(): void {
        this.ds.getTeamPlayers().subscribe(player => {
            this.players = player
        })
    }

    getUserTurnaments(userId): void {
        this.ds.getUserTurnaments(userId).subscribe(tournament => {
            this.tournaments = tournament
            for (let i = 0; i < this.tournaments.length; i++  ) {
                this.listItems.push(this.tournaments[i].name);
                console.log (this.tournaments[i].name)
            }
        });
    }

    happen() {
        if (this.list.length >= this.playermuch) {
            console.log('per daug');
            document.getElementById('preventas').classList.add('prevent');
            document.getElementById('out1').innerHTML = "Your team is full "
            return true;
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
            this.join();
            this.calculate();
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
                this.error = "";
                this.join();
                this.calculate();
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
                this.addTeamTounament(obj);
                this.router.navigate(['/userprofile'])
            }, err => this.err = 'Tournament with this name already exists')
    }

    addTeamTounament(obj) {
        this.tournament_team_object = ({
            _tournament_id: this.tournament_id,
            _team_id: obj.team._id
        });
        this.ds.TeamToTournament(JSON.stringify(this.tournament_team_object)).subscribe(obj => {
        });
    }

    join() {
        this.usrObject = ({
            name: this.tournament_name,
            sumUsers: this.list
        });
        this.ds.updateTournament(JSON.stringify(this.usrObject)).subscribe(obj => {
            },
            err => this.error = 'players price exceeds tournament budget limit');
    }
}
