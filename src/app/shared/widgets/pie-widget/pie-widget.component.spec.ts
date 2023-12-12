import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieWidgetComponent } from './pie-widget.component';

describe('PieWidgetComponent', () => {
  let component: PieWidgetComponent;
  let fixture: ComponentFixture<PieWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PieWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
