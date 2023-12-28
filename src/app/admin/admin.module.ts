import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminComponent } from './admin.component';
import { OrdersComponent } from './components/orders/orders.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    ProductsComponent,
    AdminComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    
  ]
})
export class AdminModule { }
