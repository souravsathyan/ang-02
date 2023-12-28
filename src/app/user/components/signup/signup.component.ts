import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { showAlert } from '../../../Store/Common/App.Action';
import { User } from '../../../shared/models/user.model';
import { beginRegister } from '../../../Store/user/user.action';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  formGroup: FormGroup;
  formSubmitted =false

  constructor(private store :Store){}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      mobile:new FormControl('',[Validators.required,Validators.minLength(10), Validators.maxLength(10)]),
      role:new FormControl(''),
      isActive:new FormControl(false)
    });

    this.formGroup.get('confirmPassword')?.setValidators([this.passwordMatchValidator]);

  }

  passwordMatchValidator(control: AbstractControl) {
    return control.get('password')?.value ===
      control.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  // getting controls
  get emailControl(): FormControl {
    return this.formGroup.get('email') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.formGroup.get('password') as FormControl;
  }
  get firstnameControl(): FormControl {
    return this.formGroup.get('firstname') as FormControl;
  }
  get confirmPasswordControl(): FormControl {
    return this.formGroup.get('confirmPassword') as FormControl;
  }
  get mobileControl(): FormControl {
    return this.formGroup.get('mobile') as FormControl;
  }
  //

  // when submitting
  onSubmit() {
   if(this.formGroup.valid){
    const _userobj:User = {
      name:this.formGroup.value.firstname as string,
      password:this.formGroup.value.password as string,
      email:this.formGroup.value.email as string,
      phone:this.formGroup.value.mobile as string,
      role:'user',
      status:true
    }
    this.store.dispatch(beginRegister({userData:_userobj}))
   }else{
    console.log('invalid')
   }
  }
  
}
