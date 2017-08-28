import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import set = Reflect.set;

@Injectable()
export class PointsHolderServise {

    points: any;

    public _pointsChange = new ReplaySubject<number>();
    pointsChange$ = this._pointsChange.asObservable();

    constructor() {
    }

    getPoints(): number {
        return this.points;
    }

    setPoints(value: number) {
        this.points = value;
        this._pointsChange.next(value);
    }
}
