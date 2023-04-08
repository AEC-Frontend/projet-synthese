import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationComponent } from 'src/app/components/dialog-confirmation/dialog-confirmation.component';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { DemandeDeStageService } from 'src/app/services/demande-de-stage/demande-de-stage.service';
import { TSelectOption } from 'src/app/types/TSelectOption';
import {
  ACTIVITY_SECTOR,
  NOMBRE_HEURES_SEMAINE,
  REGIONS,
  RENUMERATION,
  TYPE_DE_STAGE,
} from 'src/constants';

@Component({
  selector: 'app-demande-de-stage-ajout-page',
  templateUrl: './demande-de-stage-ajout-page.component.html',
  styleUrls: ['./demande-de-stage-ajout-page.component.scss'],
})
export class DemandeDeStageAjoutPageComponent {
  entreprises: Array<{ value: string; label: string }> = [];
  typeDeStage = TYPE_DE_STAGE;
  nombreHeuresSemaine = NOMBRE_HEURES_SEMAINE;
  renumeration = RENUMERATION;
  activitySector = ACTIVITY_SECTOR;
  regions = REGIONS;

  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private offreDeStageService: DemandeDeStageService,
    private entrepriseService: EntrepriseService,
    public dialog: MatDialog
  ) {}

  stageForm = this.formBuilder.nonNullable.group({
    enterprise: ['', Validators.required],
    resume: [''],
    city: ['', Validators.required],
    activitySector: ['', Validators.required],
    active: [true],
    published: [true],
    paid: [false],
    additionalInfo: [''],
    hoursPerWeek: [this.nombreHeuresSemaine[0].value, Validators.required],
    requirements: ['', Validators.required],
    program: ['', Validators.required],
    stageType: [this.typeDeStage[0].value, Validators.required],
    endDate: ['', Validators.required],
    startDate: ['', Validators.required],
    description: ['', Validators.required],
    titre: ['', Validators.required],
    region: ['', Validators.required],
    // name: ['', Validators.required],
  });

  onSubmit = () => {
    if (this.stageForm.status === 'INVALID') {
      this.stageForm;

      Object.keys(this.stageForm.controls).forEach((key) => {
        const control =
          this.stageForm.controls[key as keyof typeof this.stageForm.controls];

        if (control.status === 'INVALID') {
          control.markAsDirty();
        }
      });
    }

    if (this.stageForm.status === 'VALID') {
      this.loading = true;
      this.offreDeStageService
        .createDemandeDeStage({
          ...this.stageForm.getRawValue(),
          hoursPerWeek: parseInt(this.stageForm.controls['hoursPerWeek'].value),
          paid: 'false' ? false : true,
          region: {
            value: this.stageForm.controls['region'].value,
            label: this.regions.find(
              (region) =>
                region.value === this.stageForm.controls['region'].value
            )!.label,
          },
          stageType: {
            value: this.stageForm.controls['stageType'].value,
            label: this.typeDeStage.find(
              (tds) => tds.value === this.stageForm.controls['stageType'].value
            )!.label,
          },
        })
        .subscribe(() => {
          this.loading = false;
          this.openDemandeDeStageAdditionConfirmation();
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

  openDemandeDeStageAdditionConfirmation(): void {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: { textMessage: 'La demande de stage a été ajouté avec succès!' },
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
