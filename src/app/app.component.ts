import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DService} from './web_components/shared/data.srv';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'app';
}
