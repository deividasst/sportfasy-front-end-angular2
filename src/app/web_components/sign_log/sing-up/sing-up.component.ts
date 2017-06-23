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
       dataHolder= [];
       user: User;
       errorMsg: string;

  constructor(private ds: DService,private router: Router, fb: FormBuilder)

  {

     this.form = fb.group({

      name: ['', Validators.compose([Validators.required,
       Validators.minLength(5), // Minimum length is 5 characters
      Validators.maxLength(30), // Maximum length is 30 characters
      this.validateUsername])],
      surname: ['', Validators.compose([Validators.required,
       Validators.minLength(8), // Minimum length is 5 characters
      Validators.maxLength(35), // Maximum length is 30 characters
      this.validateUsername])],
      password: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(8), // Minimum length is 8 characters
        Validators.maxLength(35), // Maximum length is 35 characters
        this.validateUsername // Custom validation
      ])],
      cPassword: ['', Validators.required],// Confirm Password Input
      email:['', Validators.compose([Validators.required,
       Validators.minLength(5), // Minimum length is 5 characters
      Validators.maxLength(30), // Maximum length is 30 characters
      this.validateEmail])]

    }, {
      validator: this.matchingPasswords('password', 'cPassword') // your validation method
    })
  }
  // Function to validate e-mail is proper format
  validateEmail(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    // Test email against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid email
    } else {
      return { 'validateEmail': true } // Return as invalid email
    }
  }

  // Function to validate username is proper format
  validateUsername(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    // Test username against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid username
    } else {
      return { 'validateUsername': true } // Return as invalid username
    }
  }

  // Function to validate password
  validatePassword(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
    // Test password against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid password
    } else {
      return { 'validatePassword': true } // Return as invalid password
    }
  }

  // Funciton to ensure passwords match
  matchingPasswords(password, confirm) {
    return (group: FormGroup) => {
      // Check if both fields are the same
      if (group.controls[password].value === group.controls[confirm].value) {
        return null; // Return as a match
      } else {
        return { 'matchingPasswords': true } // Return as error: do not match
      }
    }
  }


//private formBuilder: FormBuilder

    onSubmit() {
    console.log(this.form);
  }

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


  //funcija prideti nauja vartotoja i duomenu baze
  addUser(user) {
  console.log('added new user' );
  this.ds.registerUser(this.user)
                     .subscribe(
                       hero  => this.dataHolder,
                     resError => this.errorMsg = resError);
  }


}
