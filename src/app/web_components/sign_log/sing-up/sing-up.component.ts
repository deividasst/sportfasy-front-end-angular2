import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from'@angular/http';
import {DService} from '../../shared/data.srv';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.sass']
})
export class SingUpComponent implements OnInit {

  /*itemList=[];

   data;

   constructor(private http:Http) {
     this.http.post(
     'http://localhost:3000/api/users',
     JSON.stringify({
      name: String,
      surname: String,
      password: String,
      email: String
     }))
     .subscribe(res => this.data = res.json());
   }
   post(){
     this.itemList = this.data;
   }
   */
  ngOnInit() {
  }
}
