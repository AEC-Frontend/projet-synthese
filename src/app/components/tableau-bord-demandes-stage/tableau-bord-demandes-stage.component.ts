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

@Component({
  selector: 'app-tableau-bord-demandes-stage',
templateUrl: './tableau-bord-demandes-stage.component.html',
styleUrls: ['./tableau-bord-demandes-stage.component.scss']
})

export class TableauBordDemandesStageComponent {
  displayedColumns: string[] = ['profil', 'etablissement', 'date','actions'];
  dataSource = ELEMENT_DATA;
}
