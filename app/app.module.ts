import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {appRouter} from './app.routers';

//authentication
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {JobService} from './services/job.service';

import {JobsComponent} from './jobs/jobs.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {JobComponent} from './job/job.component';
import {AuthGuard} from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
        HomeComponent,
            ProfileComponent,
              JobComponent,
                JobsComponent


  ],
  imports: [
    BrowserModule,
      appRouter
  ],
  providers: [AuthService,AuthGuard,UserService,JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
