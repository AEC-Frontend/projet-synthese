import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCandidatComponent } from './card-candidat.component';

describe('CardCandidatComponent', () => {
  let component: CardCandidatComponent;
  let fixture: ComponentFixture<CardCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
