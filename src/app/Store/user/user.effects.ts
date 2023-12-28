import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../Services/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { beginLogin, beginRegister, fetchMenu, fetchMenuSuccess, loginSuccess } from './user.action';
import { Subject, catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { showAlert } from '../Common/App.Action';
import { responseData } from '../../shared/models/user.model';
import { CommonService } from '../../Services/common.service';

@Injectable()
export class UserEffects {
  
  constructor(
    private authService: AuthService,
    private commonService : CommonService,
    private action$: Actions,
    private route: Router,
  ) {}

  _userregister = createEffect(() =>
    this.action$.pipe(
      ofType(beginRegister),
      switchMap((action) => {
        return this.authService.UserSignup(action.userData).pipe(
          switchMap((data) => {
            this.authService.emailSent$.next(true)
            this.route.navigate(['login']);
            return of(showAlert({
              message: 'Registered successfully.',
              resultype: 'pass',
            }))
          }),
          catchError((_error) =>
            of(
              showAlert({
                message: 'Registerion Failed due to :.' + _error.message,
                resultype: 'fail',
              })
            )
          )
        );
      })
    )
  );

  _userLogin = createEffect(() =>
  this.action$.pipe(
    ofType(beginLogin),
    switchMap((action) =>
      this.authService.UserLogin(action.userData).pipe(
        switchMap((data: responseData) => {
          if (data) {
            if (data.data.status === true) {

              if(data.data.role === 'admin'){
                this.route.navigate(['admin'])
              }else{
                this.route.navigate(['']);
              }
              
              this.authService.setUserToLocalStorage(data.data);
              return of(fetchMenu({ userRole: data.data.role }), loginSuccess({ userData: data }));
            } else {
              return of(showAlert({ message: data.message, resultype: 'fail' }));
            }
          } else {
            return of(showAlert({ message: 'Login failed', resultype: 'fail' }));
          }
        }),
        catchError((_error) =>
          of(showAlert({ message: 'Registration Failed due to :.' + _error.message, resultype: 'fail' }))
        )
      )
    )
  )
);

  _loadMenuByRole = createEffect(()=>
    this.action$.pipe(
      ofType(fetchMenu),
      exhaustMap((action)=>{
        return this.commonService.getMenuByRole(action.userRole).pipe(
          map((data)=>{
            return fetchMenuSuccess({menuList:data})
          }),
          catchError((_error)=> of(showAlert({message:"failed to fetch menu list", resultype:'fail'})))
        )
      })
    )
  )
}
