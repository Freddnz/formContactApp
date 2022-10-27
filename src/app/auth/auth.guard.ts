import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { FormContactService } from '../form-contact/services/form-contact.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor( private formContactService: FormContactService,
               private router: Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.formContactService.verifyName()
            .pipe(
              tap( verifyName => {
                if( !verifyName){
                  this.router.navigateByUrl('/');
                }
              })
            );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    return this.formContactService.verifyName()
            .pipe(
              tap( verifyName => {
                if( !verifyName){
                  this.router.navigateByUrl('/');
                }
              })
            );

  }
}
