import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DialogConfirmationDeleteComponent } from 'src/app/components/dialog-confirmation-delete/dialog-confirmation-delete.component';
import { Entreprise } from 'src/app/models';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';

@Component({
  selector: 'app-entreprise-detaillee',
  templateUrl: './entreprise-detaillee.component.html',
  styleUrls: ['./entreprise-detaillee.component.scss'],
})
export class EntrepriseDetailleeComponent {
  entreprise$!: Observable<{ success: boolean; data?: Entreprise }>;
  entreprise: Entreprise | null = null;
  informations: Array<{ label: string; field: keyof Entreprise }> = [
    { label: 'Adresse', field: 'address' },
    { label: 'Téléphone', field: 'contactPhone' },
    { label: 'Ville', field: 'city' },
    { label: 'Courriel', field: 'contactEmail' },
    { label: 'Province', field: 'province' },
    { label: 'Code postal', field: 'postalCode' },
  ];

  constructor(
    private route: ActivatedRoute,
    private entrepriseService: EntrepriseService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.entreprise$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        if (id) {
          return this.entrepriseService.getEntreprise(id);
        }
        return this.entreprise$;
      })
    );

    this.entreprise$.subscribe((entreprise) => {
      if (entreprise.data) {
        this.entreprise = entreprise.data;
      }
    });
  }

  getEntrepriseFieldValue(key: keyof Entreprise): string {
    const value = this.entreprise![key];
    if (typeof value !== 'string') return '';
    return value;
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(DialogConfirmationDeleteComponent, {
      data: {
        service: 'entreprise',
        id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Les données ont été supprimée');
      this._snackBar.open(result, undefined, {
        duration: 2000,
      });
    });
  }
}
