export class Tournament {
    name: string;
    start: Date;
    end: Date;
    max_teams: number;
    max_players: number;
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
