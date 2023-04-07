import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Candidat } from 'src/app/models';
import { CandidatService } from 'src/app/services/candidat/candidat.service';

@Component({
  selector: 'app-candidat-detaille',
  templateUrl: './candidat-detaille.component.html',
  styleUrls: ['./candidat-detaille.component.scss'],
})
export class CandidatDetailleComponent {
  candidat$!: Observable<{ success: boolean; data?: Candidat }>;
  candidat: Candidat | null = null;
  informations: Array<{ label: string; field: keyof Candidat }> = [
    { label: 'Adresse', field: 'address' },
    { label: 'Téléphone', field: 'phone' },
    { label: 'Ville', field: 'city' },
    { label: 'Courriel', field: 'email' },
    { label: 'Province', field: 'province' },
    { label: 'Code postal', field: 'postalCode' },
  ];

  constructor(
    private route: ActivatedRoute,
    private candidatService: CandidatService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router,
    private _snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.candidat$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        if (id) {
          return this.candidatService.getCandidat(id);
        }
        return this.candidat$;
      })
    );

    this.candidat$.subscribe((candidat) => {
      if (candidat.data) {
        this.candidat = candidat.data;
      }
    });
  }

  handlePublish() {
    this.candidatService
      .updateCandidat({ published: true }, this.candidat!._id!)
      .subscribe(() => {
        this.showSnackBar('Le candidat a bien été publiée');
        this.router.navigate(['/tableau-de-bord']);
      });
  }

  handleDontPublish() {
    this.candidatService
      .updateCandidat({ published: false }, this.candidat!._id!)
      .subscribe(() => {
        this.showSnackBar("Le candidat n'a pas été publiée");
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

  valueToString(value: any): string {
    if (typeof value !== 'string') return '';
    return value;
  }
}
