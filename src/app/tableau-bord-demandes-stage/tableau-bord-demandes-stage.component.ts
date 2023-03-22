import { Component, ViewChild } from '@angular/core';

export interface PeriodicElement {
  profil: string;
  nom: string;
  etablissement: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { profil: 'Intégrateur Web',nom: 'Jean-Sébastien Tremblay' , etablissement: 'Cégep de Trois-Rivières', date: '2022-03-03'},
  { profil: 'Intégrateur Web',nom: 'Jean-Sébastien Tremblay' , etablissement: 'Cégep de Trois-Rivières', date: '2022-03-03'},
  { profil: 'Intégrateur Web',nom: 'Jean-Sébastien Tremblay' , etablissement: 'Cégep de Trois-Rivières', date: '2022-03-03'},
  { profil: 'Intégrateur Web',nom: 'Jean-Sébastien Tremblay' , etablissement: 'Cégep de Trois-Rivières', date: '2022-03-03'},
  { profil: 'Intégrateur Web',nom: 'Jean-Sébastien Tremblay' , etablissement: 'Cégep de Trois-Rivières', date: '2022-03-03'},
  
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
  displayedColumns: string[] = ['profil', 'etablissement', 'date','actions'];
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

