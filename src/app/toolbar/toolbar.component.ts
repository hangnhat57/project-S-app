import {Component, OnInit, ViewChild} from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import { AuthService } from '../services/auth.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  

  constructor(public authService:AuthService,private router:Router) { }

  ngOnInit() {
  }
  onLoginFormResult(e){
    console.log(e)

    if(e.signedIn){
      this.router.navigate(['/home']);
      console.log('Logged');}
    else{
      alert(e.err.json().errors[0])
    }
  }
  onLogout(){
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

  

}