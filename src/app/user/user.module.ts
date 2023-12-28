import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


import { UserComponent } from './user.component';
import { HomeComponent } from './components/home/home.component';
import { UserRoutingModule } from './user.routing.module';
import { SignupComponent } from './components/signup/signup.component';


import { VerifyEmailComponent } from './components/verify-email/verify-email.component';


@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    SignupComponent,
    VerifyEmailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    
  ]
})
export class UserModule { }
