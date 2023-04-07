import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DemandeDeStageService } from 'src/app/services/demande-de-stage/demande-de-stage.service';
import { DemandeDeStage } from 'src/app/models';
import { OffreDeStageService } from 'src/app/services/offre-de-stage/offre-de-stage.service';
import { CandidatService } from 'src/app/services/candidat/candidat.service';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-confirmation-delete',
  templateUrl: './dialog-confirmation-delete.component.html',
  styleUrls: ['./dialog-confirmation-delete.component.scss'],
})
export class DialogConfirmationDeleteComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogConfirmationDeleteComponent>,
    private demandeDeStageService: DemandeDeStageService,
    private offreDeStageService: OffreDeStageService,
    private candidatService: CandidatService,
    private entrepriseService: EntrepriseService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      service: 'offreDeStage' | 'demandeDeStage' | 'candidat' | 'entreprise';
      id: string;
    }
  ) {}

  ngOnInit(): void {}

  deleteConfirmation(): void {
    switch (this.data.service) {
      case 'demandeDeStage':
        this.demandeDeStageService
          .deleteDemandeDeStage(this.data.id)
          .subscribe((_) => {
            this.dialogRef.close('La suppressions est réussie');
            this.router.navigate(['/tableau-de-bord']);
          });
        break;

      case 'offreDeStage':
        this.offreDeStageService
          .deleteOffreDeStage(this.data.id)
          .subscribe((_) => {
            this.dialogRef.close('La suppressions est réussie');
            this.router.navigate(['/tableau-de-bord']);
          });
        break;

      case 'candidat':
        this.candidatService.deleteCandidat(this.data.id).subscribe((_) => {
          this.dialogRef.close('La suppressions est réussie');
          this.router.navigate(['/tableau-de-bord']);
        });
        break;

      case 'entreprise':
        this.entrepriseService.deleteEntreprise(this.data.id).subscribe((_) => {
          this.dialogRef.close('La suppressions est réussie');
          this.router.navigate(['/tableau-de-bord']);
        });
        break;

      default:
        break;
    }
  }
}
