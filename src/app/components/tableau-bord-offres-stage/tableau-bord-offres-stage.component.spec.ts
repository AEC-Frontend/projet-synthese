import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauBordOffresStageComponent } from './tableau-bord-offres-stage.component';

describe('TableauBordOffresStageComponent', () => {
  let component: TableauBordOffresStageComponent;
  let fixture: ComponentFixture<TableauBordOffresStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauBordOffresStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauBordOffresStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
