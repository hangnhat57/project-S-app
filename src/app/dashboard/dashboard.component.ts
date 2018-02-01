import { Component, OnInit } from '@angular/core';
import {Angular2TokenService} from 'angular2-token'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  bookname: string;
  constructor() {
    }

  onBookPost() {
    console.log(this.bookname);
  }

  ngOnInit() {
    
  }

}
