import { Component, ViewChild, OnInit } from '@angular/core';

import { OffreDeStage } from 'src/app/models';
import { OffreDeStageService } from 'src/app/services/offre-de-stage/offre-de-stage.service';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-tableau-bord-offres-stage',
  templateUrl: './tableau-bord-offres-stage.component.html',
  styleUrls: ['./tableau-bord-offres-stage.component.scss']
})

export class TableauBordOffresStageComponent {
  newOffreDeStage: OffreDeStage[] = [];
  dataSourceOffreDeStage: MatTableDataSource<OffreDeStage> = new MatTableDataSource();

  displayedColumns: string[] = [
    'poste', 
    'ville', 
    'date',
    'actions'
  ];

  newoffreDeStage : OffreDeStage = {
      _id:'',
      createdAt: '',
      updatedAt: '',
      title: '',
      description: '',
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
    this.offreDeStageService.getOffreDeStages().subscribe(
      resultat => {
        console.log(resultat);

        var result: OffreDeStage[] = [];
        var offreDeStages = ((resultat.success && resultat.data !== undefined) ? resultat.data : []);
        offreDeStages.forEach(function(offreDeStage: OffreDeStage){
          if(!offreDeStage.active){
            result.push(offreDeStage);
          }
        });

        this.dataSourceOffreDeStage = new MatTableDataSource(result);
        this.dataSourceOffreDeStage.paginator = this.paginator;
        this.dataSourceOffreDeStage.sort = this.sort;
        this.tableOffreDeStage.renderRows();
      }
    );
  }

  
  activesClick() {
    var offreDeStages: OffreDeStage[] = this.dataSourceOffreDeStage.data;
    this.offreDeStageService;
    offreDeStages.forEach((offreDeStage: OffreDeStage) => {
      offreDeStage.active = true;
      let offreDeStagePartial: Partial<OffreDeStage> = {
        active: true
      }
      console.log(offreDeStage._id);
      if(offreDeStage._id !== undefined)
      this.offreDeStageService.updateOffreDeStage(offreDeStagePartial, offreDeStage._id).subscribe(
        _ => {
         this.getOffreDeStages();
        }
      );
    });
  }

  activeClick(offreDeStage: OffreDeStage) {
    offreDeStage.active = !offreDeStage.active;

    let offreDeStagePartial: Partial<OffreDeStage> = {
      active: offreDeStage.active
    }
    if(offreDeStage._id !== undefined)
    this.offreDeStageService.updateOffreDeStage(offreDeStagePartial, offreDeStage._id).subscribe(
      _ => {
       this.getOffreDeStages();
      }
    );
  }
}
