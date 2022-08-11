import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstFormComponent } from './pages/first-form/first-form.component';
import { SecondFormComponent } from './pages/second-form/second-form.component';



@NgModule({
  declarations: [
  FirstFormComponent,
  SecondFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormContactModule { }
