import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app-routing.module';
import { Angular2TokenService } from 'angular2-token';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    HttpModule
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
