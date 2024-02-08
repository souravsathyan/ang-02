import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'ang-project-02';
  sideBarOpen =false
    isSideBarOpen(){
        this.sideBarOpen = ! this.sideBarOpen
    }
  
  constructor(private router : Router){}
}
