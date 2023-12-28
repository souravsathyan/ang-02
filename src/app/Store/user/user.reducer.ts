import { createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';
import { fetchMenuSuccess, loginSuccess } from './user.action';

const _userReducer = createReducer(
  UserState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      userInfo: {
        id: action.userData.data.id,
        name: action.userData.data.name,
        email: action.userData.data.email,
        role: action.userData.data.role,
        status: action.userData.data.status,
      },
    };
  }),
  on(fetchMenuSuccess, (state, action) => {
      console.log(action.menuList)
    return {
      ...state,
      menulist: action.menuList,
    };
  })
);

export function UserReducer(state: any, action: any) {
    return _userReducer(state, action);
}
