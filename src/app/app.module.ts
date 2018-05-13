import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgPluggablesModule } from 'ng-pluggables';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    NgPluggablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
