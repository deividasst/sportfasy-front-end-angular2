import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DService} from './web_components/shared/data.srv';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  //template: '<app-sing-up></app-sing-up>'
})
export class AppComponent {
  title = 'app';
}
