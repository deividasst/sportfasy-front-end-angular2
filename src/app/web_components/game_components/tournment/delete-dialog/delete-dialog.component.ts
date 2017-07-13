import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-delete-dialog',
    template: `
        <div class="container-fluid">
            <dl class="row">
                <dt class="col-sm-6">Username:</dt>
                <dd class="col-sm-6">{{ name }}</dd>
            </dl>
            <dl class="row">
                <dt class="col-sm-6">Email:</dt>
                <dd class="col-sm-6">{{ email }}</dd>
            </dl>
        </div>
    `,
    styleUrls: ['./delete-dialog.component.sass']
})
export class DeleteDialogComponent implements OnInit {
    @Input() public name: string;
    @Input() public email: string;
    constructor() { }

    ngOnInit() {
    }

}