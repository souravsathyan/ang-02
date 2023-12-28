import { createEntityAdapter } from '@ngrx/entity';
import { User, UserModel } from '../../shared/models/user.model';

export const UserAdapter = createEntityAdapter<User>();
export const UserState: UserModel = UserAdapter.getInitialState({
  menulist: []!,
  roles: [],
  userInfo: {
    id: '',
    name: '',
    email: '',
    role: '',
    token:'',
    status: false,
  },
});