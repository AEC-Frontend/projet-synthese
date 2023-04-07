import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DialogConfirmationComponent } from 'src/app/components/dialog-confirmation/dialog-confirmation.component';
import { Entreprise } from 'src/app/models';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';

@Component({
  selector: 'app-entreprise-modifier-page',
  templateUrl: './entreprise-modifier-page.component.html',
  styleUrls: ['./entreprise-modifier-page.component.scss'],
})
export class EntrepriseModifierPageComponent {
  entreprise$!: Observable<{ success: boolean; data?: Entreprise }>;

  textFields: Array<{ name: string; label: string }> = [
    { name: 'address', label: 'Adresse' },
    { name: 'contactPhone', label: 'Téléphone' },
    { name: 'city', label: 'Ville' },
    { name: 'contactEmail', label: 'Courriel' },
    { name: 'province', label: 'Province' },
    { name: 'postalCode', label: 'Code Postal' },
  ];

  entrepriseForm!: FormGroup;
  entrepriseId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private entrepriseService: EntrepriseService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.entreprise$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.entrepriseService.getEntreprise(params.get('id')!)
      )
    );
    this.entreprise$.subscribe((entreprise) => {
      if (entreprise.data) {
        this.entrepriseForm = this.formBuilder.nonNullable.group({
          name: [entreprise.data.name, Validators.required],
          imageUrl: [entreprise.data.imageUrl, Validators.required],
          description: [entreprise.data.description, Validators.required],
          contactName: [entreprise.data.contactName, Validators.required],
          address: [entreprise.data.address, Validators.required],
          contactPhone: [entreprise.data.contactPhone, Validators.required],
          city: [entreprise.data.city, Validators.required],
          contactEmail: [
            entreprise.data.contactEmail,
            [Validators.required, Validators.email],
          ],
          province: [entreprise.data.province, Validators.required],
          postalCode: [entreprise.data.postalCode, Validators.required],
        });
        this.entrepriseId = entreprise.data._id!;
      }
    });
  }

  getFormControl(formName: string) {
    const controls = this.entrepriseForm.controls;
    const formControl = Object.keys(controls).find((key) => key === formName);

    if (formControl) {
      return controls[formControl as keyof typeof controls];
    }
    return null;
  }

  onSubmit = () => {
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
        .updateEntreprise(this.entrepriseForm.getRawValue(), this.entrepriseId)
        .subscribe(() => {
          this.openCandidatAdditionConfirmation();
          this.entrepriseForm.reset();
        });
    }
  };

  openCandidatAdditionConfirmation(): void {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: { textMessage: "L'entreprise a été modifié avec succès!" },
    });
  }
}
