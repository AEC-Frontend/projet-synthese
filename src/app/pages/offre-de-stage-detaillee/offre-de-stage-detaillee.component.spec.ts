import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreDeStageDetailleeComponent } from './offre-de-stage-detaillee.component';

describe('OffreDeStageDetailleeComponent', () => {
  let component: OffreDeStageDetailleeComponent;
  let fixture: ComponentFixture<OffreDeStageDetailleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreDeStageDetailleeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreDeStageDetailleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
