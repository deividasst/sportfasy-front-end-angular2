import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DService } from '../../shared/data.srv';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../../shared/User'

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.sass'],
  providers: [DService]
})
export class SingUpComponent implements OnInit {

  user: User;

  dataHolder= [];

  constructor(private ds: DService, private router: Router) { }

    ngOnInit() {
          this.user = new User();
      this.user.name = 'First Name';
      this.user.surname = 'Last Name';
      this.user.password = 'Password';
      this.user.email = 'email@gmail.com';

    }



  // funcija prideti nauja vartotoja i duomenu baze


  addUser(user) {
    console.log('added new user');
    this.ds.registerUser('/api/users/registration', JSON.stringify(this.user))
      .subscribe(obj => this.dataHolder);
  }
}
