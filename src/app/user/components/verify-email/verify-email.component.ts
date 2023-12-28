import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { responseData } from '../../../shared/models/user.model';
import { showAlert } from '../../../Store/Common/App.Action';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.css'
})
export class VerifyEmailComponent implements OnInit{
  token:string=''

  constructor(private authService:AuthService, private activatedRoute : ActivatedRoute, private route:Router, private store :Store){}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((val)=>{
      this.token = val['token']
    })
    
    this.authService.verifyEmail(this.token).subscribe((data:responseData)=>{
      console.log('in the verify email')
      this.authService.emailSent$.next(false)
      if(data.status==='success'){
        this.store.dispatch(showAlert({message:data.message, resultype:'pass'}))
      }else{
        this.store.dispatch(showAlert({message:data.message, resultype:'fail'}))
      }
    })
    
  }
}
