import { createAction, props } from '@ngrx/store';
import {
  Menus,
  User,
  UserCred,
  UserInfo,
  responseData,
} from '../../shared/models/user.model';

export const BEGIN_REGISTER = '[auth] begin register';
export const BEGIN_LOGIN = '[auth] begin login';
export const LOGIN_SUCCESS = '[auth] login success';
export const FETCH_MENU = '[auth] fetch menu';
export const FETCH_MENU_SUCCESS = '[auth] fetch menu sucsess';

export const beginRegister = createAction(
  BEGIN_REGISTER,
  props<{ userData: User }>()
);

export const beginLogin = createAction(
  BEGIN_LOGIN,
  props<{ userData: UserCred }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ userData: responseData }>()
);

export const fetchMenu = createAction(FETCH_MENU, props<{ userRole: string }>());

export const fetchMenuSuccess = createAction(
  FETCH_MENU_SUCCESS,
  props<{ menuList: Menus[] }>()
);
