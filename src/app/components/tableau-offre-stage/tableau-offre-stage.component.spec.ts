import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauOffreStageComponent } from './tableau-offre-stage.component';

describe('TableauOffreStageComponent', () => {
  let component: TableauOffreStageComponent;
  let fixture: ComponentFixture<TableauOffreStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauOffreStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauOffreStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
