import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map } from 'rxjs';
import { DataModel, Menus, Roleaccess } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getMenuByRole(userRole: string): Observable<Menus[]> {
    const url = './assets/db/db.json';
    return this.http.get<DataModel>(url).pipe(
      map((data) => {
        const roleAccess = data.roleAccess.filter(
          (access) => access.role === userRole
          );
          const menuCodes = roleAccess.map((access) => access.menu);
          const menuBasedOnRole = data.menu.filter((menu) => menuCodes.includes(menu.code));
        console.log(menuBasedOnRole)
        return menuBasedOnRole
      })
    )
  }

  HaveMenuAccess(userRole:string, menuname:string){
    const url = './assets/db/db.json';
    return this.http.get<DataModel>(url).pipe(
      map(data=>{
        const allowedMenu = data.roleAccess.find(item => item.role === userRole && item.menu === menuname )
        return allowedMenu !== undefined
      })
    )
  }
}
