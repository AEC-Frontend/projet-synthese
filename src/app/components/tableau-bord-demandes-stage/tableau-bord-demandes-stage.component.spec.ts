import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauBordDemandesStageComponent } from './tableau-bord-demandes-stage.component';

describe('TableauBordDemandesStageComponent', () => {
  let component: TableauBordDemandesStageComponent;
  let fixture: ComponentFixture<TableauBordDemandesStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauBordDemandesStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauBordDemandesStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
