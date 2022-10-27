import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { FirstFormComponent } from './form-contact/pages/first-form/first-form.component';
import { SecondFormComponent } from './form-contact/pages/second-form/second-form.component';
import { WelcomeComponent } from './form-contact/pages/welcome/welcome.component';

const routes: Routes = [
  { 
    path: '', 
    component: WelcomeComponent 
  },
  { 
    path: 'first-form', 
    component: FirstFormComponent,
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ] 
  },
  { 
    path: 'second-form', 
    component: SecondFormComponent,
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ] 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
