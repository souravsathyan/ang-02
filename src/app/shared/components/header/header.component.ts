import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter<void>()

  toggleSideBar(){
    this.toggle.emit()
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    });
  }
}
