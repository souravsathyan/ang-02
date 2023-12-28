import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserModel } from '../../shared/models/user.model';
import { UserAdapter } from './user.state';

const getUserState = createFeatureSelector<UserModel>('user');

export const getMenuByRole = createSelector(
  getUserState,
  (state) => {
    return state.menulist
  }
);

const userSelector = UserAdapter.getSelectors();
