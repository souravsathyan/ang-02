import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formGroup:FormGroup
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email])
    })
  }
  get emailControl(): FormControl {
    return this.formGroup.get('email') as FormControl;
  }
  onSubmit(){
    console.log(this.formGroup)
  }

}
