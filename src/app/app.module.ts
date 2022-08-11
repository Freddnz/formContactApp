import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormContactModule } from './form-contact/form-contact.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
