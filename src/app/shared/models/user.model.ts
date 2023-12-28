import { EntityState } from '@ngrx/entity';

// register
export interface User {
  name: string;
  password: string;
  email: string;
  phone: string;
  role: string;
  status: boolean;
}
// login
export interface UserCred {
  password: string;
  email: string;
}
// local storage
export interface UserInfo {
  id:string,
  name: string;
  email: string;
  role: string;
  status: boolean;
}

export interface Roles{
    code:string,
    name:string
}

export interface Menus{
    code:string,
    name:string
}

export interface Roleaccess{
    role:string,
    menu:string
}

export interface DataModel {
  role: Roles[];
  menu: Menus[];
  roleAccess: Roleaccess[];
}

export interface UserModel extends EntityState<User> {
  menulist: Menus[];
  roles: Roles[];
  userInfo: UserInfo;
}

export interface responseData {
  status:string,
  message:string,
  data:UserInfo
}
