import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { Angular2TokenService } from 'angular2-token';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthService } from './services/auth.service';
import { MatterModule } from './matter.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guard/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    DashboardComponent,
    LoginFormComponent,
    RegisterFormComponent,ProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatterModule,
    HttpModule,FormsModule,BrowserAnimationsModule,ReactiveFormsModule
 
  ],
  providers: [Angular2TokenService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
