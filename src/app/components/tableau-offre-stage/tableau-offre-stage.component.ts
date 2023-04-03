
import { Component,ViewChild, OnInit } from '@angular/core';
import { OffreDeStage } from 'src/app/models';
import { OffreDeStageService } from 'src/app/services/offre-de-stage/offre-de-stage.service';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-tableau-offre-stage',
  templateUrl: './tableau-offre-stage.component.html',
  styleUrls: ['./tableau-offre-stage.component.scss']
})

export class TableauOffreStageComponent  implements OnInit {
  newOffreStage: OffreDeStageService[] = [];
  dataSourceOffreStage: MatTableDataSource<OffreDeStage> = new MatTableDataSource();

  displayedColumns: string[] = [
    'poste', 
    'secteurActivite', 
    'region',
    'dateInscription',
    'actions'];

 

    newOffreDeStage : OffreDeStage = {
      _id:'',
      createdAt: '',
      updatedAt: '',
      title: '',
      description: '',
      startDate: '',
      enterprise: {
        _id: '',
        createdAt: '',
        updatedAt: '',
        name: '',
        description: '',
        imageUrl: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        address: '',
        city: '',
        province: '',
        postalCode: '',
        published: true,
      },
      endDate: '',
      program: '',
      requirements: '',
      stageType: '',
      hoursPerWeek: 0,
      additionalInfo: '',
      paid: true,
      published: true,
      active: true,
    };

    
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tableOffreDeStages!: MatTable<OffreDeStage>;

  constructor(private offreDeStageService: OffreDeStageService, private _snackBar: MatSnackBar,  public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getOffreDeStages();
  }

  
  getOffreDeStages() { 
    this.offreDeStageService.getOffreDeStages().subscribe(
      resultat => {
        console.log(resultat);
        this.dataSourceOffreStage = new MatTableDataSource(((resultat.success && resultat.data !== undefined) ? resultat.data : []));
        this.dataSourceOffreStage.paginator = this.paginator;
        this.dataSourceOffreStage.sort = this.sort;
        this.tableOffreDeStages.renderRows();
      }
    );
  }
}



