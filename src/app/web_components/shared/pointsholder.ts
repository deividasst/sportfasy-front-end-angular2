import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import set = Reflect.set;

@Injectable()
export class PointsHolderServise {

    points: any;

    constructor() {
    }

    getPoints() {
        return this.points;
    }

    setPoints(value: any): void {
        this.points = value;
    }
}
