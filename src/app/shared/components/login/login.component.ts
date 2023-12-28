import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCred } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { beginLogin } from '../../../Store/user/user.action';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formGroup:FormGroup
  emailSend=false
  constructor(private store : Store, private authService:AuthService){}

  


  ngOnInit(): void {

    this.authService.emailSent$.subscribe(val=>{
      console.log(val)
      this.emailSend=val
    })

    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
    })
  }

  get emailControl(): FormControl {
    return this.formGroup.get('email') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.formGroup.get('password') as FormControl;
  }

  onSubmit(){
    if(this.formGroup.valid){
      const _userObj:UserCred = {
        email:this.formGroup.value.email as string,
        password:this.formGroup.value.password as string
      }
      this.store.dispatch(beginLogin({userData:_userObj}))
    }
    
  }

}
