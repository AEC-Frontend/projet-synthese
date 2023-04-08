import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DialogConfirmationComponent } from 'src/app/components/dialog-confirmation/dialog-confirmation.component';
import { Candidat } from 'src/app/models';
import { CandidatService } from 'src/app/services/candidat/candidat.service';

@Component({
  selector: 'app-candidat-modifier-page',
  templateUrl: './candidat-modifier-page.component.html',
  styleUrls: ['./candidat-modifier-page.component.scss'],
})
export class CandidatModifierPageComponent {
  loading: boolean = true;
  candidat$!: Observable<{ success: boolean; data?: Candidat }>;
  candidat: Candidat | null = null;

  textFields: Array<{ name: string; label: string }> = [
    { name: 'address', label: 'Adresse' },
    { name: 'phone', label: 'Téléphone' },
    { name: 'city', label: 'Ville' },
    { name: 'email', label: 'Courriel' },
    { name: 'province', label: 'Province' },
    { name: 'postalCode', label: 'Code Postal' },
  ];

  candidatForm!: FormGroup;
  candidatId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private candidatService: CandidatService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.candidat$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.candidatService.getCandidat(params.get('id')!)
      )
    );

    this.candidat$.subscribe((candidat) => {
      this.loading = false;
      if (candidat.data) {
        this.candidat = candidat.data;
        this.candidatForm = this.formBuilder.nonNullable.group({
          description: [candidat.data.description, Validators.required],
          address: [candidat.data.address, Validators.required],
          phone: [candidat.data.phone, Validators.required],
          city: [candidat.data.city, Validators.required],
          email: [candidat.data.email, [Validators.required, Validators.email]],
          province: [candidat.data.province, Validators.required],
          postalCode: [candidat.data.postalCode, Validators.required],
        });
        this.candidatId = candidat.data._id!;
      }
    });
  }

  getFormControl(formName: string) {
    const controls = this.candidatForm.controls;
    const formControl = Object.keys(controls).find((key) => key === formName);

    if (formControl) {
      return controls[formControl as keyof typeof controls];
    }
    return null;
  }

  onSubmit = () => {
    if (this.candidatForm.status === 'INVALID') {
      Object.keys(this.candidatForm.controls).forEach((key) => {
        const control =
          this.candidatForm.controls[
            key as keyof typeof this.candidatForm.controls
          ];

        if (control.status === 'INVALID') {
          control.markAsDirty();
        }
      });
    }

    if (this.candidatForm.status === 'VALID') {
      this.loading = true;
      this.candidatService
        .updateCandidat(this.candidatForm.getRawValue(), this.candidatId)
        .subscribe(() => {
          this.loading = false;
          this.openCandidatAdditionConfirmation();
          this.candidatForm.reset();
        });
    }
  };

  openCandidatAdditionConfirmation(): void {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: { textMessage: 'Le candidat a été modifié avec succès!' },
    });
  }
}
