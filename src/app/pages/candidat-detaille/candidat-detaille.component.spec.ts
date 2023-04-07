import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatDetailleComponent } from './candidat-detaille.component';

describe('CandidatDetailleComponent', () => {
  let component: CandidatDetailleComponent;
  let fixture: ComponentFixture<CandidatDetailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatDetailleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
