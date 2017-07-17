//import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {JobComponent} from './job/job.component';
import {AuthGuard} from './auth.guard';
import {JobsComponent} from './jobs/jobs.component';


const appRoutes: Routes= [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'profile',
        component:ProfileComponent,
        canActivate: [AuthGuard]
    },
   {path: 'job',component:JobComponent}, 
{path:'jobs', component:JobsComponent}

];


export const appRouter=RouterModule.forRoot(appRoutes);
