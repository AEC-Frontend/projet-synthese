import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreDeStageModifierPageComponent } from './offre-de-stage-modifier-page.component';

describe('OffreDeStageModifierPageComponent', () => {
  let component: OffreDeStageModifierPageComponent;
  let fixture: ComponentFixture<OffreDeStageModifierPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreDeStageModifierPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreDeStageModifierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
