import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDeBordPageComponent } from './tableau-de-bord-page.component';

describe('TableauDeBordPageComponent', () => {
  let component: TableauDeBordPageComponent;
  let fixture: ComponentFixture<TableauDeBordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauDeBordPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauDeBordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
