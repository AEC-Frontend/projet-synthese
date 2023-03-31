import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationComponent } from 'src/app/components/dialog-confirmation/dialog-confirmation.component';
import { Entreprise, OffreDeStage } from 'src/app/models';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { OffreDeStageService } from 'src/app/services/offre-de-stage/offre-de-stage.service';
import { TSelectOption } from 'src/app/types/TSelectOption';

@Component({
  selector: 'app-offre-de-stage-ajout-page',
  templateUrl: './offre-de-stage-ajout-page.component.html',
  styleUrls: ['./offre-de-stage-ajout-page.component.scss'],
})
export class OffreDeStageAjoutPageComponent {
  entreprises: Array<{ value: string; label: string }> = [];
  typeDeStage: TSelectOption[] = [
    { value: 'TEMPS_PARTIEL', label: 'Temps partiel' },
    { value: 'TEMPS_PLEIN', label: 'Temps plein' },
  ];
  nombreHeuresSemaine: TSelectOption[] = [
    { value: '5', label: '5 heures' },
    { value: '10', label: '10 heures' },
    { value: '15', label: '15 heures' },
    { value: '20', label: '20 heures' },
    { value: '25', label: '25 heures' },
    { value: '30', label: '30 heures' },
    { value: '35', label: '35 heures' },
  ];
  renumeration: TSelectOption[] = [
    { value: 'false', label: 'À discuter' },
    { value: 'true', label: 'Stage rémunéré' },
    { value: 'false', label: 'Stage non rémunéré' },
  ];

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
    hoursPerWeek: [
      parseInt(this.nombreHeuresSemaine[0].value),
      Validators.required,
    ],
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
            value: entreprise.name,
            label: entreprise.name,
          }));
        }

        console.log(this.entreprises);
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
