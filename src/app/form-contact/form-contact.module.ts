import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FirstFormComponent } from './pages/first-form/first-form.component';
import { SecondFormComponent } from './pages/second-form/second-form.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';




@NgModule({
  declarations: [
  FirstFormComponent,
  SecondFormComponent,
  WelcomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormContactModule { }
