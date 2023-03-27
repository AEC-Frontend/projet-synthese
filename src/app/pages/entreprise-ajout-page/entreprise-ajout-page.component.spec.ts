import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseAjoutPageComponent } from './entreprise-ajout-page.component';

describe('EntrepriseAjoutPageComponent', () => {
  let component: EntrepriseAjoutPageComponent;
  let fixture: ComponentFixture<EntrepriseAjoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseAjoutPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrepriseAjoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
