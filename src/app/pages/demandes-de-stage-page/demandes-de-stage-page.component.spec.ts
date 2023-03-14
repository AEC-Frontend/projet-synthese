import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesDeStagePageComponent } from './demandes-de-stage-page.component';

describe('DemandesDeStagePageComponent', () => {
  let component: DemandesDeStagePageComponent;
  let fixture: ComponentFixture<DemandesDeStagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesDeStagePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandesDeStagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
