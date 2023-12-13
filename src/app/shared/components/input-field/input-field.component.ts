import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {
  @Input() label=''
  @Input() placeholder=''
  @Input() type=''
  @Input() inputId=''
  @Input() control= new FormControl()
  @Input() name =''

  errorMessages : Record<string, string>={
    required:'This field is required',
    email:'The email id is invalid'
  }
}
