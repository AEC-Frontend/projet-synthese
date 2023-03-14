import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprisesPageComponent } from './entreprises-page.component';

describe('EntreprisesPageComponent', () => {
  let component: EntreprisesPageComponent;
  let fixture: ComponentFixture<EntreprisesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreprisesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntreprisesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
