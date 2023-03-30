import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/app/models/Candidat';
import { CandidatService } from 'src/app/services/candidat/candidat.service';

@Component({
  selector: 'app-card-candidat',
  templateUrl: './card-candidat.component.html',
  styleUrls: ['./card-candidat.component.scss']
})

export class CardCandidatComponent implements OnInit {
  candidats : Candidat[] = [];
  
 constructor(private candidatService: CandidatService) { }

  ngOnInit(): void {
   this.getCandidats();
  }

  getCandidats(): void {
    this.candidatService.getCandidats()
    .subscribe(resultat => this.candidats = (resultat.success && resultat.data !== undefined) ? resultat.data : []);
  }
}
