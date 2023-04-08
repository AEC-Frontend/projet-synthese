import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDeStageEditionPageComponent } from './demande-de-stage-edition-page.component';

describe('DemandeDeStageEditionPageComponent', () => {
  let component: DemandeDeStageEditionPageComponent;
  let fixture: ComponentFixture<DemandeDeStageEditionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeDeStageEditionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeDeStageEditionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
