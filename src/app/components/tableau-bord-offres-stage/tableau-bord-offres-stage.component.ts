import { Component, ViewChild, OnInit } from '@angular/core';

import { OffreDeStage } from 'src/app/models';
import { OffreDeStageService } from 'src/app/services/offre-de-stage/offre-de-stage.service';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfirmationDeleteComponent } from '../dialog-confirmation-delete/dialog-confirmation-delete.component';

@Component({
  selector: 'app-tableau-bord-offres-stage',
  templateUrl: './tableau-bord-offres-stage.component.html',
  styleUrls: ['./tableau-bord-offres-stage.component.scss'],
})
export class TableauBordOffresStageComponent {
  loading: boolean = false;
  newOffreDeStage: OffreDeStage[] = [];
  dataSourceOffreDeStage: MatTableDataSource<OffreDeStage> =
    new MatTableDataSource();

  displayedColumns: string[] = ['poste', 'ville', 'date', 'actions'];

  newoffreDeStage: OffreDeStage = {
    _id: '',
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
    active: true,
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
    this.loading = true;
    this.offreDeStageService.getOffreDeStages().subscribe((resultat) => {
      console.log(resultat);

      var result: OffreDeStage[] = [];
      var offreDeStages =
        resultat.success && resultat.data !== undefined ? resultat.data : [];
      offreDeStages.forEach(function (offreDeStage: OffreDeStage) {
        if (!offreDeStage.active) {
          result.push(offreDeStage);
        }
      });
      this.loading = false;
      this.dataSourceOffreDeStage = new MatTableDataSource(result);
      this.dataSourceOffreDeStage.paginator = this.paginator;
      this.dataSourceOffreDeStage.sort = this.sort;
      this.tableOffreDeStage.renderRows();
    });
  }

  activesClick() {
    this.loading = true;
    var offreDeStages: OffreDeStage[] = this.dataSourceOffreDeStage.data;
    this.offreDeStageService;
    offreDeStages.forEach((offreDeStage: OffreDeStage) => {
      offreDeStage.active = true;
      let offreDeStagePartial: Partial<OffreDeStage> = {
        active: true,
      };
      if (offreDeStage._id !== undefined)
        this.offreDeStageService
          .updateOffreDeStage(offreDeStagePartial, offreDeStage._id)
          .subscribe((_) => {
            this.getOffreDeStages();
            this.loading = false;
          });
    });
  }

  activeClick(offreDeStage: OffreDeStage) {
    this.loading = true;
    offreDeStage.active = !offreDeStage.active;

    let offreDeStagePartial: Partial<OffreDeStage> = {
      active: offreDeStage.active,
    };
    if (offreDeStage._id !== undefined)
      this.offreDeStageService
        .updateOffreDeStage(offreDeStagePartial, offreDeStage._id)
        .subscribe((_) => {
          this.getOffreDeStages();
          this.loading = false;
        });
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(DialogConfirmationDeleteComponent, {
      data: {
        service: 'demandeDeStage',
        id,
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
