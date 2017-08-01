import { Component, OnInit } from '@angular/core';
import {TokenHolderServise} from '../../../shared/tokenholder.srv';
import {DService} from '../../../shared/data.srv';
import {Tournament} from '../../../shared/Tournament'

@Component({
  selector: 'app-list-tournment',
  templateUrl: './list-tournment.component.html',
  styleUrls: ['./list-tournment.component.sass']
})
export class ListTournmentComponent implements OnInit {
    userId: string;
    tournaments: Tournament[];

  constructor(private ds: DService,
              private tokenHolder: TokenHolderServise) { }

  ngOnInit() {
      this.tokenHolder.idChange$.subscribe(item => {
          this.userId = item;
          this.getUserTurnaments(item);
      });
  }
    getUserTurnaments(userId): void {
        this.ds.getUserTurnaments(userId).subscribe(tournament => {
            this.tournaments = tournament
        });
    }


}
