import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresDeStagePageComponent } from './offres-de-stage-page.component';

describe('OffresDeStagePageComponent', () => {
  let component: OffresDeStagePageComponent;
  let fixture: ComponentFixture<OffresDeStagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresDeStagePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffresDeStagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
