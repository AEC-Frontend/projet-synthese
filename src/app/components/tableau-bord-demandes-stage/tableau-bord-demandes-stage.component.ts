import { Component, ViewChild, OnInit } from '@angular/core';

import { DemandeDeStage } from 'src/app/models';
import { DemandeDeStageService } from 'src/app/services/demande-de-stage/demande-de-stage.service';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tableau-bord-demandes-stage',
  templateUrl: './tableau-bord-demandes-stage.component.html',
  styleUrls: ['./tableau-bord-demandes-stage.component.scss'],
})
export class TableauBordDemandesStageComponent {
  newDemandedestage: DemandeDeStage[] = [];
  dataSourceDemandeStage: MatTableDataSource<DemandeDeStage> =
    new MatTableDataSource();

  displayedColumns: string[] = ['profil', 'etablissement', 'date', 'actions'];

  newdemandeDeStage: DemandeDeStage = {
    _id: '',
    createdAt: '',
    updatedAt: '',
    titre: '',
    description: '',
    startDate: '',
    enterprise: '',
    endDate: '',
    program: '',
    requirements: '',
    stageType: {
      __typename: '',
      label: '',
      value: '',
    },
    hoursPerWeek: 0,
    additionalInfo: '',
    paid: true,
    published: true,
    skills: {
      __typename: '',
      label: '',
      value: '',
    },
    active: true,
    region: {
      __typename: '',
      label: '',
      value: '',
    },
    activitySector: '',
    city: '',
    resume: '',
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tableDemandeDeStages!: MatTable<DemandeDeStage>;

  constructor(
    private demandeDeStageService: DemandeDeStageService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getDemandeDeStages();
  }

  getDemandeDeStages() {
    this.demandeDeStageService.getDemandeDeStages().subscribe((resultat) => {
      console.log(resultat);

      var result: DemandeDeStage[] = [];
      var demandeDeStages =
        resultat.success && resultat.data !== undefined ? resultat.data : [];
      demandeDeStages.forEach(function (demandeDeStage: DemandeDeStage) {
        if (!demandeDeStage.active) {
          result.push(demandeDeStage);
        }
      });

      this.dataSourceDemandeStage = new MatTableDataSource(result);
      this.dataSourceDemandeStage.paginator = this.paginator;
      this.dataSourceDemandeStage.sort = this.sort;
      this.tableDemandeDeStages.renderRows();
    });
  }

  activesClick() {
    var demandeDeStages: DemandeDeStage[] = this.dataSourceDemandeStage.data;
    this.demandeDeStageService;
    demandeDeStages.forEach((demandeDeStage: DemandeDeStage) => {
      demandeDeStage.active = true;
      let demandeDeStagePartial: Partial<DemandeDeStage> = {
        active: true,
      };
      console.log(demandeDeStage._id);

      this.demandeDeStageService
        .updateDemandeDeStage(demandeDeStagePartial, demandeDeStage._id!)
        .subscribe((_) => {
          this.getDemandeDeStages();
        });
    });
  }

  activeClick(demandeDeStage: DemandeDeStage) {
    demandeDeStage.active = !demandeDeStage.active;

    let demandeDeStagePartial: Partial<DemandeDeStage> = {
      active: demandeDeStage.active,
    };

    this.demandeDeStageService
      .updateDemandeDeStage(demandeDeStagePartial, demandeDeStage._id)
      .subscribe((_) => {
        this.getDemandeDeStages();
      });
  }
}
