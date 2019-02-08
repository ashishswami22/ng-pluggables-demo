import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgPluggablesModule } from 'ng-pluggables';

import { AppComponent } from './app.component';
import { STTService } from './services/stt.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgPluggablesModule
  ],
  providers: [
    STTService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
