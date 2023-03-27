import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperNavLinkComponent } from './upper-nav-link.component';

describe('UpperNavLinkComponent', () => {
  let component: UpperNavLinkComponent;
  let fixture: ComponentFixture<UpperNavLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperNavLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperNavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
