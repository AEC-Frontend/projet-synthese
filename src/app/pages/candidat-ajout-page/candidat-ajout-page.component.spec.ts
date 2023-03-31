import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatAjoutPageComponent } from './candidat-ajout-page.component';

describe('CandidatAjoutPageComponent', () => {
  let component: CandidatAjoutPageComponent;
  let fixture: ComponentFixture<CandidatAjoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatAjoutPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatAjoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
