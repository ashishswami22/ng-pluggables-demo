import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPluggablesModule } from 'ng-pluggables';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgPluggablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
