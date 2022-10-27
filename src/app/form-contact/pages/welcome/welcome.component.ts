import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormContactService } from '../../services/form-contact.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('inputName') inputName: ElementRef<HTMLInputElement>
  public errorName: boolean = false;

  constructor( private router: Router,
               private formContactService: FormContactService ) { }

  ngOnInit(): void {
    localStorage.removeItem('userName');
  }

  singIn() {
    const userName = this.inputName.nativeElement.value;

    if( userName.trim().length === 0 || userName.trim().length <= 4){
      this.errorName = true;
      return;
    }

    this.formContactService.saveUserName( userName );
    this.router.navigateByUrl('/first-form');
  }

}
