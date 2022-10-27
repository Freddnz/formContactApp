import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormContactService {

  constructor() { }

  verifyName(): Observable<boolean>{
    if(!localStorage.getItem('userName')){
      return of(false)
    }else {
      return of(true);
    }
  }

  saveUserName( userName: string ): any{
    localStorage.setItem('userName', JSON.stringify( userName ));
  }

}
