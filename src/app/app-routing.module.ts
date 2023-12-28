import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { SignupComponent } from './user/components/signup/signup.component';
import { authGuard } from './guards/auth.guard';
import { VerifyEmailComponent } from './user/components/verify-email/verify-email.component';

const routes: Routes = [
  // Auth
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'verifyEmail/:token', component:VerifyEmailComponent},
  // Admin
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),canActivate:[authGuard]
      
  },
  // User
  {
    path: '',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),canActivate:[authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
