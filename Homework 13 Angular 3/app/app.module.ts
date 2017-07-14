import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component'

import { myRoutes } from "./app.routes";
import { HomePageComponent } from './home-page/home-page.component';
import { StudentsComponent } from './students/students.component';
import { ProfileComponent } from './profile/profile.component';
import {MyCanActivateGuard} from "./guards/mycanactivate.guard";
import {MyCanDeactivateGuard} from "./guards/mycandeactivate.guard";
import {DbService} from "./db.service";
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorComponent
    // GuardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes // add it to imports

  ],
  providers: [MyCanActivateGuard,MyCanDeactivateGuard,DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
