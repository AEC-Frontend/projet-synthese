import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseDetailleeComponent } from './entreprise-detaillee.component';

describe('EntrepriseDetailleeComponent', () => {
  let component: EntrepriseDetailleeComponent;
  let fixture: ComponentFixture<EntrepriseDetailleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseDetailleeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrepriseDetailleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
