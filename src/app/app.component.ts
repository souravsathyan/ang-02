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
  // isMenuVisible=false
  
  constructor(private router : Router){}

    // ngDoCheck(): void {
    //     const currentRoute = this.router.url
    //     if(currentRoute == '/login' || currentRoute == '/register'){
    //       this.isMenuVisible = false
    //     }else{
    //       this.isMenuVisible = true
    //     }
    // }
}
