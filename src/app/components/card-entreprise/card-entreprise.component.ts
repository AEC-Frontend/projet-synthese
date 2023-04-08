import { Component, OnInit } from '@angular/core';
import { Entreprise } from 'src/app/models/Entreprise';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';

@Component({
  selector: 'app-card-entreprise',
  templateUrl: './card-entreprise.component.html',
  styleUrls: ['./card-entreprise.component.scss'],
})
export class CardEntrepriseComponent implements OnInit {
  loading: boolean = true;
  entreprises: Entreprise[] = [];

  constructor(private entrepriseService: EntrepriseService) {}

  ngOnInit(): void {
    this.getEntreprises();
  }

  getEntreprises(): void {
    this.entrepriseService.getEntreprises().subscribe((resultat) => {
      this.entreprises =
        resultat.success && resultat.data !== undefined ? resultat.data : [];
      this.loading = false;
    });
  }
}

{
}
