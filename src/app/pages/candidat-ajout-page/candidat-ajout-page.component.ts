import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationComponent } from 'src/app/components/dialog-confirmation/dialog-confirmation.component';
import { CandidatService } from 'src/app/services/candidat/candidat.service';

@Component({
  selector: 'app-candidat-ajout-page',
  templateUrl: './candidat-ajout-page.component.html',
  styleUrls: ['./candidat-ajout-page.component.scss'],
})
export class CandidatAjoutPageComponent {
  isLoading = false;

  textFields: Array<{ name: string; label: string }> = [
    { name: 'address', label: 'Adresse' },
    { name: 'phone', label: 'Téléphone' },
    { name: 'city', label: 'Ville' },
    { name: 'email', label: 'Courriel' },
    { name: 'province', label: 'Province' },
    { name: 'postalCode', label: 'Code Postal' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private candidatService: CandidatService,
    public dialog: MatDialog
  ) {}

  candidatForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    jobTitle: ['', Validators.required],
    description: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    city: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    province: ['', Validators.required],
    postalCode: ['', Validators.required],
  });

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
      this.isLoading = true;
      this.candidatService
        .createCandidat({
          ...this.candidatForm.getRawValue(),
        })
        .subscribe(() => {
          this.isLoading = false;
          this.openCandidatAdditionConfirmation();
          this.candidatForm.reset();
        });
    }
  };

  openCandidatAdditionConfirmation(): void {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: { textMessage: 'Le candidat a été ajouté avec succès!' },
    });
  }
}
