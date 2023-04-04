import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatModifierPageComponent } from './candidat-modifier-page.component';

describe('CandidatModifierPageComponent', () => {
  let component: CandidatModifierPageComponent;
  let fixture: ComponentFixture<CandidatModifierPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatModifierPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatModifierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
