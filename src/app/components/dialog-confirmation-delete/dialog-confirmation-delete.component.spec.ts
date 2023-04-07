import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmationDeleteComponent } from './dialog-confirmation-delete.component';

describe('DialogConfirmationDeleteComponent', () => {
  let component: DialogConfirmationDeleteComponent;
  let fixture: ComponentFixture<DialogConfirmationDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmationDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogConfirmationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
