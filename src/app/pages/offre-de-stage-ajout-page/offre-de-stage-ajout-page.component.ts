import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationComponent } from 'src/app/components/dialog-confirmation/dialog-confirmation.component';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { OffreDeStageService } from 'src/app/services/offre-de-stage/offre-de-stage.service';
import {
  NOMBRE_HEURES_SEMAINE,
  RENUMERATION,
  TYPE_DE_STAGE,
} from 'src/constants';

@Component({
  selector: 'app-offre-de-stage-ajout-page',
  templateUrl: './offre-de-stage-ajout-page.component.html',
  styleUrls: ['./offre-de-stage-ajout-page.component.scss'],
})
export class OffreDeStageAjoutPageComponent {
  entreprises: Array<{ value: string; label: string }> = [];
  typeDeStage = TYPE_DE_STAGE;
  nombreHeuresSemaine = NOMBRE_HEURES_SEMAINE;
  renumeration = RENUMERATION;

  constructor(
    private formBuilder: FormBuilder,
    private offreDeStageService: OffreDeStageService,
    private entrepriseService: EntrepriseService,
    public dialog: MatDialog
  ) {}

  stageForm = this.formBuilder.nonNullable.group({
    enterprise: ['', Validators.required],
    active: [true],
    published: [true],
    paid: [false],
    additionalInfo: [''],
    hoursPerWeek: [this.nombreHeuresSemaine[0].value, Validators.required],
    stageType: [this.typeDeStage[0].value, Validators.required],
    requirements: ['', Validators.required],
    program: ['', Validators.required],
    endDate: ['', Validators.required],
    startDate: ['', Validators.required],
    description: ['', Validators.required],
    title: ['', Validators.required],
  });

  onSubmit = () => {
    console.log(this.stageForm);
    if (this.stageForm.status === 'INVALID') {
      Object.keys(this.stageForm.controls).forEach((key) => {
        const control =
          this.stageForm.controls[key as keyof typeof this.stageForm.controls];

        if (control.status === 'INVALID') {
          control.markAsDirty();
        }
      });
    }

    if (this.stageForm.status === 'VALID') {
      this.offreDeStageService
        .createOffreDeStage({
          ...this.stageForm.getRawValue(),
          hoursPerWeek: parseInt(this.stageForm.controls['hoursPerWeek'].value),
          paid: 'false' ? false : true,
        })
        .subscribe(() => {
          this.openOffreDeStageAdditionConfirmation();
          this.stageForm.reset();
        });
    }
  };

  ngOnInit() {
    this.entrepriseService
      .getEntreprises()
      .subscribe(({ data: entreprises }) => {
        if (entreprises) {
          this.entreprises = entreprises.map((entreprise) => ({
            value: entreprise._id!,
            label: entreprise.name,
          }));
        }
      });
  }

  openOffreDeStageAdditionConfirmation(): void {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: { textMessage: "L'entreprise a été ajouté avec succès!" },
    });
  }

  getFormControl(formName: string) {
    const controls = this.stageForm.controls;
    const formControl = Object.keys(controls).find((key) => key === formName);

    if (formControl) {
      return controls[formControl as keyof typeof controls];
    }
    return null;
  }
}
