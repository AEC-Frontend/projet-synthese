import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDeStageAjoutPageComponent } from './demande-de-stage-ajout-page.component';

describe('DemandeDeStageAjoutPageComponent', () => {
  let component: DemandeDeStageAjoutPageComponent;
  let fixture: ComponentFixture<DemandeDeStageAjoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeDeStageAjoutPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeDeStageAjoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
