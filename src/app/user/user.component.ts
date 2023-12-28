import { Component } from "@angular/core";

@Component({
    selector:'app-user',
    styleUrl:'./user.component.css',
    templateUrl:'./user.component.html'
})
export class UserComponent{
    sideBarOpen =false
    isSideBarOpen(){
        this.sideBarOpen = ! this.sideBarOpen
    }
}