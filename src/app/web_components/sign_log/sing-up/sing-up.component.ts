import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DService} from '../../shared/data.srv';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Hero } from './hero'

@Component({
  moduleId: module.id,
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.sass']
})
export class SingUpComponent implements OnInit {

  //iš hero
  model = new Hero('Vardas', 'Pavarde', 'Slaptazodis', 'pastas@gmail.com');
  submitted = false;

  //ne iš hero
  heroes=[];
  mode = 'Observable';

  //iš hero
  onSubmit () { this.submitted = true; }

  //iš hero
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
    constructor(private ds: DService) {}

    newHero() {
     this.model = new Hero('zodis', 'kazkas', 'kazkas', 'kazkas');
   }

  addUser(user) {
  console.log('added new user' );
  this.ds.add( user )
                     .subscribe(
                       hero  => this.heroes);
  }

  ngOnInit() {}
}
