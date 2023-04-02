import { Component } from '@angular/core';

@Component({
  selector: 'app-demande-de-stage',
  templateUrl: './demande-de-stage.component.html',
  styleUrls: ['./demande-de-stage.component.scss'],
})
export class DemandeDeStageComponent {
  data = [
    {
      title: 'Demmande de stage',
      role: 'Développeur Front-End',
    },
    {
      title: 'Demmande de stage',
      role: 'Développeur Front-End',
    },
    {
      title: 'Demmande de stage',
      role: 'Développeur Front-End',
    },
  ];
}
