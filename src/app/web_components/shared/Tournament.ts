export class Tournament {
    _id: string;
    name: string;
    start: Date;
    end: Date;
    max_teams: number;
    max_players: number;
    _tournament_master: string;
    budget: number;
    _users: [{
        name: string;
        surname: string;
        password: string;
        email: string;
    }];
    _teams: [{
        name: string;
        master: string;
        players: string;
    }];
}
