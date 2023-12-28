import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter<void>()

  constructor(private authService:AuthService){}

  toggleSideBar(){
    this.toggle.emit()
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    });
  }

  logout(){
    this.authService.logout()
  }
}
