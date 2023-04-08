import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDemandesStageComponent } from './tableau-demandes-stage.component';

describe('TableauDemandesStageComponent', () => {
  let component: TableauDemandesStageComponent;
  let fixture: ComponentFixture<TableauDemandesStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauDemandesStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauDemandesStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
