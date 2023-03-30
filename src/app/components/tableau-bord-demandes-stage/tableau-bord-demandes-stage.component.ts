import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DemandeDeStageService } from 'src/app/services/demande-de-stage/demande-de-stage.service';

export interface DemandeDeStage {
  profil: string;
  nom: string;
  etablissement: string;
  date: string;
}

const ELEMENT_DATA: DemandeDeStage[] = [
  { 
    profil: 'Intégrateur Web',
    nom: 'Jean-Sébastien Tremblay', 
    etablissement: 'Cégep de Trois-Rivières', 
    date: '2022-03-03'
  },
  { 
    profil: 'Intégrateur Web',
    nom: 'Jean-Sébastien Tremblay', 
    etablissement: 'Cégep de Trois-Rivières', 
    date: '2022-03-03'
  },
  { 
    profil: 'Intégrateur Web',
    nom: 'Jean-Sébastien Tremblay', 
    etablissement: 'Cégep de Trois-Rivières', 
    date: '2022-03-03'
  },
  { 
    profil: 'Intégrateur Web',
    nom: 'Jean-Sébastien Tremblay' , 
    etablissement: 'Cégep de Trois-Rivières', 
    date: '2022-03-03'
  },
  { 
    profil: 'Intégrateur Web',
    nom: 'Jean-Sébastien Tremblay' , 
    etablissement: 'Cégep de Trois-Rivières', 
    date: '2022-03-03'
  },
];

@Component({
  selector: 'app-tableau-bord-demandes-stage',
templateUrl: './tableau-bord-demandes-stage.component.html',
styleUrls: ['./tableau-bord-demandes-stage.component.scss']
})
export class TableauBordDemandesStageComponent {
  
  displayedColumns: string[] = ['profil', 'etablissement', 'date','actions'];
  dataSource = ELEMENT_DATA;
  sort: any;
  paginator: any;
  dataSourceDemandeDeStages: any;

  constructor(private demandeDeStageService: DemandeDeStageService, private _snackBar: MatSnackBar,  public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.getDemandeDeStages();
  }

  getDemandeDeStages(){
    this.demandeDeStageService.getDemandeDeStages().subscribe(
      resultat => {
        console.log(resultat);
        this.dataSourceDemandeDeStages = new MatTableDataSource();
        this.dataSourceDemandeDeStages.paginator = this.paginator;
        this.dataSourceDemandeDeStages.sort = this.sort;
      }
    );
  }

  deleteDemandeDeStage(_id: string) { 
    this.demandeDeStageService.deleteDemandeDeStage(_id).subscribe(
      _ => {
        this.getDemandeDeStages();
      }
    );
  }
}
