import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { UserInfo } from '../shared/models/user.model';
import { CommonService } from '../Services/common.service';


export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService)
  const router = inject(Router)
  const commonService = inject(CommonService)

  const userInfo:UserInfo = service.getUserDataFromStorage()
  
  if (userInfo.name != '' && userInfo.name != null) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }

};

