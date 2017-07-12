import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import {CounterOneComponent} from './counter-one.component';
import { CounterTwoComponent } from './counter-two.component';
@NgModule({
  declarations: [
    AppComponent,
    CounterOneComponent,
    CounterComponent,
    CounterTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
