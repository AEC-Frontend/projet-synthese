import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseModifierPageComponent } from './entreprise-modifier-page.component';

describe('EntrepriseModifierPageComponent', () => {
  let component: EntrepriseModifierPageComponent;
  let fixture: ComponentFixture<EntrepriseModifierPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseModifierPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrepriseModifierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
