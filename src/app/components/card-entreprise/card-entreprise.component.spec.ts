import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEntrepriseComponent } from './card-entreprise.component';

describe('CardEntrepriseComponent', () => {
  let component: CardEntrepriseComponent;
  let fixture: ComponentFixture<CardEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
