import {Component, OnInit, Input, Inject, Injectable, Optional} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {DService} from '../../../shared/data.srv';
import {User} from '../../../shared/User';
import {SecurityTrimming} from '../../../shared/security-trimming.srv';
import {TokenHolderServise} from '../../../shared/tokenholder.srv';

@Component({
    selector: 'app-team-dialog',
    templateUrl: './team-dialog.component.html',
    styleUrls: ['./team-dialog.component.sass']
})
export class TeamDialogComponent implements OnInit {
    public opened;

    constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any,
                private ds: DService,
                private securityTrimm: SecurityTrimming,
                private tokenHolder: TokenHolderServise)

    { }

    public close() {
        this.opened = false;
    }

    public open() {

        this.opened = true;
    }

    ngOnInit() {
    }

}
