import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreDeStageAjoutPageComponent } from './offre-de-stage-ajout-page.component';

describe('OffreDeStageAjoutPageComponent', () => {
  let component: OffreDeStageAjoutPageComponent;
  let fixture: ComponentFixture<OffreDeStageAjoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreDeStageAjoutPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreDeStageAjoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
