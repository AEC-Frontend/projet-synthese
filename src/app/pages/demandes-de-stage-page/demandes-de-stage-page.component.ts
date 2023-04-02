import { Component } from '@angular/core';

@Component({
  selector: 'app-demandes-de-stage-page',
  templateUrl: './demandes-de-stage-page.component.html',
  styleUrls: ['./demandes-de-stage-page.component.scss']
})
export class DemandesDeStagePageComponent {
  data = [
    {
      title: "Demmande de stage",
      role: "Développeur Front-End",
    },
    {
      title: "Demmande de stage",
      role: "Développeur Front-End",
    },
    {
      title: "Demmande de stage",
      role: "Développeur Front-End",
    },
  ];
}
