import { Component, ViewChild, OnInit } from '@angular/core';
import { DemandeDeStage } from 'src/app/models';
import { DemandeDeStageService } from 'src/app/services/demande-de-stage/demande-de-stage.service';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfirmationDeleteComponent } from '../dialog-confirmation-delete/dialog-confirmation-delete.component';

@Component({
  selector: 'app-tableau-demandes-stage',
  templateUrl: './tableau-demandes-stage.component.html',
  styleUrls: ['./tableau-demandes-stage.component.scss'],
})
export class TableauDemandesStageComponent implements OnInit {
  newdemandedestage: DemandeDeStage[] = [];
  dataSourceDemandeStage: MatTableDataSource<DemandeDeStage> =
    new MatTableDataSource();

  displayedColumns: string[] = [
    'poste',
    'secteurActivite',
    'region',
    'dateInscription',
    'actions',
  ];

  newDemandeDeStage: DemandeDeStage = {
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
      this.dataSourceDemandeStage = new MatTableDataSource(
        resultat.success && resultat.data !== undefined ? resultat.data : []
      );
      this.dataSourceDemandeStage.paginator = this.paginator;
      this.dataSourceDemandeStage.sort = this.sort;
      this.tableDemandeDeStages.renderRows();
    });
  }

  openDialog(demandeDeStage?: DemandeDeStage) {
    const dialogRef = this.dialog.open(DialogConfirmationDeleteComponent, {
      data: {
        service: 'demandeDeStage',
        id: demandeDeStage?._id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Les données ont été supprimée');
      this._snackBar.open(result, undefined, {
        duration: 2000,
      });
      this.getDemandeDeStages();
    });
  }
}
