import { Component, OnInit } from '@angular/core';
import {Angular2TokenService} from 'angular2-token'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  
  constructor(public _tokenService:Angular2TokenService) { 
    
    this._tokenService.signIn({
      email:    'hangnhat@gmail.com',
      password: '1Lanbihack'
        }).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
  );
  this._tokenService.registerAccount({
    email: 'hangnhat@gmail.com',
    password: '1Lanbihack',
    passwordConfirmation: '1Lanbihack',
    name: "Nhat Nguyen"
  }).subscribe(
    res=> console.log(res),
    error =>    console.log(error)
)
  }

  ngOnInit() {
    
  }

}
