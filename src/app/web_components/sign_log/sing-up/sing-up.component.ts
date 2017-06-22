import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DService } from '../../shared/data.srv';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../../shared/User'
import { PasswordValidation } from './password-validator';



@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.sass'],
  providers:[DService]
})
export class SingUpComponent implements OnInit {

form: FormGroup;



  constructor(private ds: DService,private router: Router, fb: FormBuilder) 
     
  {
     this.form = fb.group({
      password: ['', Validators.required],
      cPassword: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword // your validation method
    })
  }
    
//private formBuilder: FormBuilder

    onSubmit() {
    console.log(this.form);
  }
    user: User;
    errorMsg: string;
    

    public location = '' ;
    ngOnInit() {
      this.user = new User();
      this.user.name;
      this.user.surname;
      this.user.password;
      this.user.cPassword;
      this.user.email;
    }

    save(model: User, isValid: boolean) {
        // call API to save customer
        console.log(model, isValid);
    }

  //duomenim saugot vieta
  dataHolder=[];

  //funcija prideti nauja vartotoja i duomenu baze
  addUser(user) {
  console.log('added new user' );
  this.ds.registerUser(this.user)
                     .subscribe(
                       hero  => this.dataHolder,
                     resError => this.errorMsg = resError);
  }


}
