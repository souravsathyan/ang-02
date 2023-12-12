import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { UserComponent } from './user.component';
import { HomeComponent } from './components/home/home.component';
import { UserRoutingModule } from './user.routing.module';



@NgModule({
  declarations: [
    UserComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
