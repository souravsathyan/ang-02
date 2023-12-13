import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements AfterContentInit {
  @Input() title=''
  @Input() subtitle=''
  @Input()disabled : boolean = false

  // @ContentChild(FormGroup) formGroup: FormGroup;
  
  ngAfterContentInit(): void {
    // if (this.formGroup) {
    //   this.disabled = this.formGroup.invalid;
    // }
  }


}
