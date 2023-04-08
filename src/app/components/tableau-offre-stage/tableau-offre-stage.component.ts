import { Component, ViewChild,OnInit } from '@angular/core';

import { OffreDeStage } from 'src/app/models';
import { OffreDeStageService } from 'src/app/services/offre-de-stage/offre-de-stage.service';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfirmationDeleteComponent } from '../dialog-confirmation-delete/dialog-confirmation-delete.component';

@Component({
  selector: 'app-tableau-offre-stage',
  templateUrl: './tableau-offre-stage.component.html',
  styleUrls: ['./tableau-offre-stage.component.scss']
})
export class TableauOffreStageComponent implements OnInit {
  newOffreDeStage: OffreDeStage[] = [];
  dataSourceOffreDeStage: MatTableDataSource<OffreDeStage> = new MatTableDataSource();

  displayedColumns: string[] = [
    'poste',
    'secteurActivite',
    'region',
    'dateInscription',
    'actions',
  ];

  newoffreDeStage : OffreDeStage = {
      _id:'',
      createdAt: '',
      updatedAt: '',
      title: '',
      description: '',
      enterprise: '',
      startDate: '',
      endDate: '',
      program: '',
      requirements: '',
      stageType: '',
      hoursPerWeek: 0,
      additionalInfo: '',
      paid: true,
      published: true,
      active: true
    };

    
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tableOffreDeStage!: MatTable<OffreDeStage>;

  constructor(
    private offreDeStageService: OffreDeStageService, 
    private _snackBar: MatSnackBar,  
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getOffreDeStages();
  }
  
  getOffreDeStages() { 
    this.offreDeStageService.getOffreDeStages().subscribe((resultat) => {
      console.log(resultat);
      this.dataSourceOffreDeStage = new MatTableDataSource(
        resultat.success && resultat.data !== undefined ? resultat.data : []
      );
      this.dataSourceOffreDeStage.paginator = this.paginator;
      this.dataSourceOffreDeStage.sort = this.sort;
      this.tableOffreDeStage.renderRows();
    });
  }

  openDialog(offreDeStage?: OffreDeStage) {
    const dialogRef = this.dialog.open(DialogConfirmationDeleteComponent, {
      data: {
        service: 'offreDeStage',
        id: offreDeStage?._id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Les données ont été supprimée');
      this._snackBar.open(result, undefined, {
        duration: 2000,
      });
      this.getOffreDeStages();
    });
  }
}
