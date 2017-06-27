import { Component, OnInit } from '@angular/core';
import { DatepickerModule } from 'angular2-material-datepicker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DService} from '../../../shared/data.srv';
import {Observable} from 'rxjs/Observable';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms'
@Component({
  selector: 'app-creat-tournment',
  templateUrl: './creat-tournment.component.html',
  styleUrls: ['./creat-tournment.component.sass']
})
export class CreatTournmentComponent implements OnInit {
    yourModelDate: any;
    yourModelDate1: any;
    maxDate = new Date(2017, 8);
    minDate = new Date(2017, 5);
  constructor(piker: DatepickerModule ) { }

  ngOnInit() {
  }

}
