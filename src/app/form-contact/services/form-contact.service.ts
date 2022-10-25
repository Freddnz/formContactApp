import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormContactService {

  public userName: string;

  constructor() { }

  saveUserName( userName: string ): any{
    this.userName = userName;
  }

}
