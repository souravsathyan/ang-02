import { Injectable } from '@angular/core';
import { User, UserCred, UserInfo, responseData } from '../shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  APIBaseUrl = 'http://localhost:3000/auth'

  emailSent$ = new Subject<boolean>()

  constructor(private http : HttpClient, private router :Router){}

  UserSignup(data:User){
    return this.http.post(this.APIBaseUrl+'/signup',data)
  }

  UserLogin(data:UserCred){
    return this.http.post<responseData>(this.APIBaseUrl+'/login',data)
  }

  setUserToLocalStorage(userData:UserInfo){
    return localStorage.setItem('userData',JSON.stringify(userData))
  }

  getUserDataFromStorage(){
    let _obj : UserInfo = {
      id:'',
      name:'',
      email:'',
      role:'',
      status:false,
    }
    if(localStorage.getItem('userData')!= null){
      let jsonString = localStorage.getItem('userData')as string
      _obj = JSON.parse(jsonString)
      return _obj
    }else{
      return _obj
    }
  }

 logout(){
  localStorage.removeItem('userData')
  this.router.navigate(['login'])
 }

 verifyEmail(token:string){
  console.log(typeof token)
  return this.http.patch(this.APIBaseUrl+'/verifyEmail',{token})
 }

//  pending
 autoLogin(){}

 autoLogout(){}



}
