import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const userData= localStorage.getItem('userData')
  const userToken = JSON.parse(userData).token
  const modifiedReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${userToken}`),
  });
  
  return next(modifiedReq);
};
