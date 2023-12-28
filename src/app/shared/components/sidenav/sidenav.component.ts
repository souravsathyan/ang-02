import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getMenuByRole } from '../../../Store/user/user.selector';
import { subscribeOn } from 'rxjs';
import { Menus, UserInfo } from '../../models/user.model';
import { fetchMenu } from '../../../Store/user/user.action';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit{
  menuList : any

  constructor(private store:Store){}

  ngOnInit(): void {
    if(localStorage.getItem('userData')!=null){
      let jsonString = localStorage.getItem('userData') as string;
      const _obj =JSON.parse(jsonString)as UserInfo
      this.store.dispatch(fetchMenu({userRole:_obj.role}))
    }
    this.store.select(getMenuByRole).subscribe((item) => {
      this.menuList = item; 
    });
  }
  
}
