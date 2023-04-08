import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DialogConfirmationDeleteComponent } from 'src/app/components/dialog-confirmation-delete/dialog-confirmation-delete.component';
import { DemandeDeStage } from 'src/app/models';
import { DemandeDeStageService } from 'src/app/services/demande-de-stage/demande-de-stage.service';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';

@Component({
  selector: 'app-demande-de-stage',
  templateUrl: './demande-de-stage.component.html',
  styleUrls: ['./demande-de-stage.component.scss'],
})
export class DemandeDeStageComponent {
  loading: boolean = false;
  demandeDeStage$!: Observable<{ success: boolean; data?: DemandeDeStage }>;
  demandeDeStage: DemandeDeStage | null = null;
  requirments: Array<{ label: string; field: keyof DemandeDeStage }> = [
    { label: 'Programme de formation', field: 'program' },
    { label: "Établissement d'enseignement", field: 'enterprise' },
    { label: "Secteur d'activité", field: 'activitySector' },
    { label: 'Ville', field: 'city' },
    { label: 'Compétences', field: 'skills' },
    { label: 'Région', field: 'region' },
  ];

  stageInfo: Array<{ label: string; field: keyof DemandeDeStage }> = [
    { label: 'Type de stage', field: 'stageType' },
    { label: 'Date de début', field: 'startDate' },
    { label: "Nombre d'heures par semaine", field: 'hoursPerWeek' },
    { label: 'Date de fin', field: 'endDate' },
    { label: 'Rémunération', field: 'paid' },
  ];

  constructor(
    private route: ActivatedRoute,
    private demandeDeStageService: DemandeDeStageService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = true;
    this.demandeDeStage$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        if (id) {
          return this.demandeDeStageService.getDemandeDeStage(id);
        }
        return this.demandeDeStage$;
      })
    );

    this.demandeDeStage$.subscribe((demandeDeStage) => {
      this.loading = false;
      if (demandeDeStage.data) {
        this.demandeDeStage = demandeDeStage.data;
      }
    });
  }

  getEntrepriseFieldValue(key: keyof DemandeDeStage): string {
    const value = this.demandeDeStage![key];
    if (typeof value !== 'string') return '';
    return value;
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(DialogConfirmationDeleteComponent, {
      data: {
        service: 'demandeDeStage',
        id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this._snackBar.open(result, undefined, {
        duration: 2000,
      });
    });
  }

  getDemandeDeStageLabel(key: keyof DemandeDeStage): string {
    const value = () => this.demandeDeStage![key];
    type TLabelValue = { label: string; value: string; __typename: string };

    if (value() === null) return '';

    if (key === 'stageType' || key === 'region' || key === 'skills') {
      return (value() as TLabelValue).label;
    }

    if (key === 'hoursPerWeek') {
      return `${value()} heures par semaine`;
    }

    if (key === 'paid') {
      return (value() as boolean) ? 'Rémunéré' : 'Non rémunéré';
    }

    if (key === 'startDate' || key === 'endDate') {
      return new Date(value() as string).toLocaleDateString('fr-CA', {
        dateStyle: 'long',
      });
    }

    return value() as string;
  }

  handlePublish() {
    this.demandeDeStageService
      .updateDemandeDeStage(
        { published: true, active: true },
        this.demandeDeStage!._id!
      )
      .subscribe(() => {
        this.showSnackBar('Le DemandeDeStage a bien été publiée');
        this.router.navigate(['/tableau-de-bord']);
      });
  }

  handleDontPublish() {
    this.demandeDeStageService
      .updateDemandeDeStage(
        { published: false, active: false },
        this.demandeDeStage!._id!
      )
      .subscribe(() => {
        this.showSnackBar("Le DemandeDeStage n'a pas été publiée");
        this.router.navigate(['/tableau-de-bord']);
      });
  }

  showSnackBar(message: string, action?: string) {
    this._snackBar
      .open(message, action)
      .afterOpened()
      .subscribe(() => {
        setTimeout(() => {
          this._snackBar.dismiss();
        }, 5000);
      });
  }
}
