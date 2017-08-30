import {Component, OnInit, Inject} from '@angular/core';
import {DService} from '../../../shared/data.srv';
import {Router} from '@angular/router';
import {TokenHolderServise} from '../../../shared/tokenholder.srv';
import {LogOutComponent} from '../../../sign_log/log-out/log-out.component';
import {Team} from '../../../shared/Team'
import {Players} from '../../../shared/Players'
import {Tournament} from '../../../shared/Tournament'
import {Tournament_teams} from '../../../shared/Tournament-teams'
import {disableDebugTools} from "@angular/platform-browser";

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
    tournament_id: any;
    disabled = true;
    quit = false;
    public listItems: Array<string> = new Array;
    name;
    public teamList: Array<string> = new Array;
    public opened;
    tournament;
    budget_not_exceeded = false;
    teams: Team[];

    constructor(private ds: DService,
                private tokenHolder: TokenHolderServise,
                private router: Router) {
    }

    checkTeamBudget(player_list_to_check, player) {
        const budget_with_new_member = player_list_to_check.reduce((sumator, value) => {
            return sumator + value.price
        }, 0);
        if (budget_with_new_member <= this.tournament_budget) {
            this.checkTeamBudget_server(player_list_to_check, budget_with_new_member, player);
        } else if (budget_with_new_member === 0) {
            alert('team budget exceeded');
            this.budget_not_exceeded = true;
        } else {
            this.budget_not_exceeded = true;
            alert('team budget exceeded');
        }
    }

    activateClasss(player) {
        player.active = !player.active;
    }

    public close() {
        this.opened = false;
    }

    public open() {
        this.opened = true;
    }

    loginti(tournament) {
        return this.tournament_name = tournament.name, this.tournament_budget = tournament.budget, this.tournament_id = tournament._id
    }

    public selectionChange(name: any): void {
        for (let i = 0; i < this.tournaments.length; i++) {
            if (this.tournaments[i].name === name) {
                this.loginti(this.tournaments[i])
                this.tournament = this.tournaments[i];
            }
        }
    }

    doit() {
        if (this.quit) {
            return;
        }
        this.quit = true;
        this.disabled = !this.disabled
    }

    getPlayers(): void {
        this.ds.getTeamPlayers().subscribe(player => {
            this.players = player
        })
    }

    getUserTurnaments(userId): void {
        this.ds.getUserTurnaments(userId).subscribe(tournament => {
            this.listItems = [];
            this.tournaments = tournament
            for (let i = 0; i < this.tournaments.length; i++) {
                this.listItems.push(this.tournaments[i].name);

            }
        });
    }

    // check function - validates of player amount
    checkMaxPlayers(): boolean {
        if (this.list.length <= this.tournament.max_players) {
            return true;
        } else {
            document.getElementById('preventas').classList.add('prevent');
            document.getElementById('out1').innerHTML = 'Your team is full ';
            this.error = 'Your team is full';
            alert(`Your team is full`);
            return false;
        }
    }

    addPlayer(player) {
        if (this.list.indexOf(player) === -1) {
            const player_list_to_check = Object.assign([], this.list);
            player_list_to_check.push(player);
            if (this.checkMaxPlayers()) {
                this.checkTeamBudget(player_list_to_check, player);
            }
        } else {
            alert(`You can't add this player twice`)
        }
    }

    removePlayer(player) {
        if (this.list.indexOf(player) !== -1) {
            this.activateClasss(player);
            for (let i = this.list.length; i--;) {
                if (this.list[i] === player) {
                    this.list.splice(i, 1);
                    alert(player.name + ' removed');
                    this.list2 = (this.list.map(item => item.name)
                        .filter((value, index, self) => self.indexOf(value) === index))
                    document.getElementById('out').innerHTML = 'Current team is: ' + this.list2;
                    document.getElementById('preventas').classList.remove('prevent');
                    document.getElementById('out1').innerHTML = ' ';
                    this.error = ' ';
                    // this.join();
                    // this.calculate();
                }
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
            this.getTournamentTeams(item);
        });
    }

    sendTeam(team) {
        this.team._players = this.list
        this.team._tournament = this.tournament_id,
            this.ds.registerTeam(JSON.stringify(this.team))
                .subscribe(obj => {
                    this.addTeamTounament(obj);
                    this.router.navigate(['/dashboard'])
                }, err => this.err = 'Tournament with this name already exists')
    }

    addTeamTounament(obj) {
        const tournament_team_object = ({
            _tournament_id: this.tournament_id,
            _team_id: obj.team._id,
            _team_master: this.userId
        });
        this.ds.TeamToTournament(JSON.stringify(tournament_team_object)).subscribe(object => {
        });
        for (let i = 0; i < this.list.length; i++) {
            const players_ledger = ({
                tournament_id: this.tournament_id,
                team_id: obj.team._id,
                player_id: this.list[i]._id,
                total_income: this.list[i].price * -1
            });
            this.ds.postPlayersLedger(JSON.stringify(players_ledger)).subscribe(object => {
            });
            const team_players = {
                _team: obj.team._id,
                _player: this.list[i]._id,
                buy_p: this.list[i].price * -1
            };
            this.ds.buy_team_players(JSON.stringify(team_players)).subscribe(object => {
            });
        }
    }

    checkTeamBudget_server(player_list_to_check, budget_with_new_member, player) {
        this.usrObject = ({
            name: this.tournament_name,
            sumUsers: player_list_to_check
        });
        this.ds.updateTournament(JSON.stringify(this.usrObject)).subscribe(obj => {
                this.budget_not_exceeded = true;
                const balance = this.tournament_budget - budget_with_new_member;
                document.getElementById('budget').innerHTML = 'Your budget left: ' + balance;
                this.activateClasss(player);
                // add new player name to list
                this.list2 = (player_list_to_check.map(item => ' ' + item.name)
                    .filter((value, index, self) => self.indexOf(value) === index))
                document.getElementById('out').innerHTML = 'Current team is:  ' + this.list2;
                this.list.push(player);
            },
            err => {
                this.error = 'players price exceeds tournament budget limit';
                this.budget_not_exceeded = true;
            });
    }

    // Gets my tournament teams
    getTournamentTeams(teamMaster): void {

        this.ds.getMyTeams(teamMaster).subscribe(team => {
            this.teamList = [];
            this.teams = team;

            for (let i = 0; i < this.teams.length; i++) {
                this.teamList.push(this.teams[i]._tournament.name)

            }
            this.listItems = this.listItems.filter(val => !this.teamList.includes(val));

        });
    }
}

