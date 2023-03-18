import { Component, ViewChild } from '@angular/core';

export interface PeriodicElement {
  profil: string;
  etablissement: string;
  date: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { profil: 'Hydrogen',etablissement: 'Cégep de Trois-Rivières', date: 1.0079},
  { profil: 'Helium', etablissement: 'Cégep de Trois-Rivières', date: 4.0026},
  { profil: 'Lithium', etablissement: 'Cégep de Trois-Rivières', date: 6.941},
  { profil: 'Beryllium', etablissement: 'Cégep de Trois-Rivières', date: 9.0122},
  { profil: 'Boron', etablissement: 'Cégep de Trois-Rivières', date: 10.811},
  
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-tableau-bord-demandes-stage',
templateUrl: './tableau-bord-demandes-stage.component.html',
styleUrls: ['./tableau-bord-demandes-stage.component.scss']
})
export class TableauBordDemandesStageComponent {
  displayedColumns: string[] = ['etablissement', 'profil', 'date'];
  dataSource = ELEMENT_DATA;
}

import { DemandeDeStage } from 'src/app/models';
import { DemandeDeStageService } from 'src/app/services/demande-de-stage/demande-de-stage.service';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


// @Component({
//   selector: 'app-tableau-bord-demandes-stage',
//   templateUrl: './tableau-bord-demandes-stage.component.html',
//   styleUrls: ['./tableau-bord-demandes-stage.component.scss']
// })
// export class TableauBordDemandesStageComponent {
//   newDemandeDeStage: DemandeDeStage[] = [];
//   dataSourceDemandeDeStages: MatTableDataSource<DemandeDeStage> = new MatTableDataSource();
//   columnsToDisplay = [
//     'profil',
//     'etablissement',
//     'date',
//     'actions',
//     ];

//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;
//   @ViewChild(MatTable) tableDemandeDeStages!: MatTable<DemandeDeStage>;



//   constructor(private DemandeDeStageService: DemandeDeStageService, private _snackBar: MatSnackBar,  public dialog: MatDialog) { }

//   ngOnInit(): void {
    
//   }

  

// }

