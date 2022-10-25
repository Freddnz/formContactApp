import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormContactService } from '../../services/form-contact.service';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styles: [
  ]
})
export class FirstFormComponent implements OnInit {

  public userName: string = '';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  myForm: FormGroup = this.fb.group({
    firstName: [ '', [Validators.required, Validators.minLength(5)] ],
    lastName: [ '', [Validators.required, Validators.minLength(5)] ],
    company: [ '', [Validators.required, Validators.minLength(3)] ],
    address: [ '', [Validators.required, Validators.minLength(6)] ],
    email: [ '', [Validators.required, Validators.pattern(this.emailPattern)] ],
    phone: [ '', Validators.required ],
    addInformation: [ '']
  });

  get emailError(): string{
    const errors = this.myForm.get('email')?.errors;

    if ( errors?.required ){
      return 'Email is required';
    } else if ( errors?.pattern ) {
      return 'The value not have mail format';
    }

    return '';
  }

  constructor( private fb: FormBuilder,
               private formContactService: FormContactService  ) { }

  ngOnInit(): void {
    this.userName = this.formContactService.userName;
  }

  validField( field: string ): any{
    return this.myForm.controls[field].errors &&
           this.myForm.controls[field].touched
  };

  saveDataForm(): any{

    if( this.myForm.invalid ){
      this.myForm.markAllAsTouched();
      return;
    };

    console.info('Saved data!!!');
    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
