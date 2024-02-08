import {Component } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent{
  editMode = false
  buttonText='Add Product'

  toggleEditMode(){
    this.editMode = !this.editMode
    this.buttonText = (this.editMode) ? 'Back' : "Add Product"
  }
}
