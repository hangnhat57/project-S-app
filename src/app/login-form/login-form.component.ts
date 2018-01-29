import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from "@angular/router";



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  passConfirmFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  matcher = new MyErrorStateMatcher();
  signInUser = {
    email: '',
    password: ''
  };

  @Output() onFormResult = new EventEmitter<any>();
  
  constructor(public authService:AuthService,private router:Router) {}

  ngOnInit() {}

  onSignInSubmit(){
    console.log("start")
    this.authService.logInUser(this.signInUser).subscribe(
        res => {
          if(res.status == 200){
            this.onFormResult.emit({signedIn: true, res});
            this.router.navigate(['/']); 
          }
        },
        err => {
          console.log('err:', err);
          this.onFormResult.emit({signedIn: false, err});
        }
    );

  }

}