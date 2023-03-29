import { Component } from '@angular/core';

export interface PeriodicElement {
  poste: string;
  nom: string;
  ville: string;
  date: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { poste: 'Intégrateur Web',nom: 'Acolyte communication' , ville: 'Cégep de Trois-Rivières', date: '2022-03-03'},
  { poste: 'Intégrateur Web',nom: 'Acolyte communication' , ville: 'Cégep de Trois-Rivières', date: '2022-03-03'},
  { poste: 'Intégrateur Web',nom: 'Acolyte communication' , ville: 'Cégep de Trois-Rivières', date: '2022-03-03'},
  { poste: 'Intégrateur Web',nom: 'Acolyte communication' , ville: 'Cégep de Trois-Rivières', date: '2022-03-03'},
  { poste: 'Intégrateur Web',nom: 'Acolyte communication' , ville: 'Cégep de Trois-Rivières', date: '2022-03-03'},
  
];

@Component({
  selector: 'app-tableau-bord-offres-stage',
  templateUrl: './tableau-bord-offres-stage.component.html',
  styleUrls: ['./tableau-bord-offres-stage.component.scss']
})

export class TableauBordOffresStageComponent {
  displayedColumns: string[] = ['poste', 'ville', 'date','actions'];
  dataSource = ELEMENT_DATA;
}
