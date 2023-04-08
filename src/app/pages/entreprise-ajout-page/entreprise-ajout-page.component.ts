import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationComponent } from 'src/app/components/dialog-confirmation/dialog-confirmation.component';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';

@Component({
  selector: 'app-entreprise-ajout-page',
  templateUrl: './entreprise-ajout-page.component.html',
  styleUrls: ['./entreprise-ajout-page.component.scss'],
})
export class EntrepriseAjoutPageComponent {
  loading: boolean = false;
  textFields: Array<{ name: string; label: string }> = [
    { name: 'address', label: 'Adresse' },
    { name: 'contactPhone', label: 'Téléphone' },
    { name: 'city', label: 'Ville' },
    { name: 'contactEmail', label: 'Courriel' },
    { name: 'province', label: 'Province' },
    { name: 'postalCode', label: 'Code Postal' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private entrepriseService: EntrepriseService,
    public dialog: MatDialog
  ) {}

  entrepriseForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    imageUrl: ['', Validators.required],
    description: ['', Validators.required],
    contactName: ['', Validators.required],
    address: ['', Validators.required],
    contactPhone: ['', Validators.required],
    city: ['', Validators.required],
    contactEmail: ['', [Validators.required, Validators.email]],
    province: ['', Validators.required],
    postalCode: ['', Validators.required],
  });

  getFormControl(formName: string) {
    const controls = this.entrepriseForm.controls;
    const formControl = Object.keys(controls).find((key) => key === formName);

    if (formControl) {
      return controls[formControl as keyof typeof controls];
    }
    return null;
  }

  onSubmit = () => {
    this.loading = true;
    if (this.entrepriseForm.status === 'INVALID') {
      Object.keys(this.entrepriseForm.controls).forEach((key) => {
        const control =
          this.entrepriseForm.controls[
            key as keyof typeof this.entrepriseForm.controls
          ];

        if (control.status === 'INVALID') {
          control.markAsDirty();
        }
      });
    }

    if (this.entrepriseForm.status === 'VALID') {
      this.entrepriseService
        .createEntreprise({
          ...this.entrepriseForm.getRawValue(),
        })
        .subscribe(() => {
          this.loading = false;
          this.openCandidatAdditionConfirmation();
          this.entrepriseForm.reset();
        });
    }
  };

  openCandidatAdditionConfirmation(): void {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: { textMessage: "L'entreprise a été ajouté avec succès!" },
    });
  }
}
