import {Injectable} from '@angular/core';


@Injectable()
export class KendoUiSettings {

    private _pageSize = 4;
    private _skip = 0;


    getPageSize(): number {
        return this._pageSize;
    }

    setPageSize(value: number) {
        this._pageSize = value;
    }

    getSkip(): number {
        return this._skip;
    }

    setSkip(value: number) {
        this._skip = value;
    }
}
