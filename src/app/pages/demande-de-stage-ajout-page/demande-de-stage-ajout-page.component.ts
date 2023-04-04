import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationComponent } from 'src/app/components/dialog-confirmation/dialog-confirmation.component';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { DemandeDeStageService } from 'src/app/services/demande-de-stage/demande-de-stage.service';
import { TSelectOption } from 'src/app/types/TSelectOption';

@Component({
  selector: 'app-demande-de-stage-ajout-page',
  templateUrl: './demande-de-stage-ajout-page.component.html',
  styleUrls: ['./demande-de-stage-ajout-page.component.scss'],
})
export class DemandeDeStageAjoutPageComponent {
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
  activitySector: TSelectOption[] = [
    { value: 'sante', label: 'Santé' },
    { value: 'science', label: 'Science' },
    { value: 'construction', label: 'Construction' },
    { value: 'restauration', label: 'Restauration' },
    { value: 'commerce_de_detail', label: 'Commerce de détail' },
    { value: 'informatique', label: 'Informatique' },
  ];
  regions: TSelectOption[] = [
    { value: 'BAS_ST_LAURENT', label: 'Bas-St-Laurent' },
    { value: 'GASPESIE', label: 'Gaspésie-Iles-de-la-Madeleine' },
    { value: 'SAGUENAY_LAC_ST_JEAN', label: 'Saguenay-Lac-St-Jean' },
    { value: 'NORD-DU-QUEBEC', label: 'Nord-du-Québec' },
    { value: 'BAS_ST_LAURENT', label: 'Bas-St-Laurent' },
    { value: 'CHAUDIERE_APPALACHES', label: 'Chaudière-Appalaches' },
    { value: 'MAURICIE', label: 'Mauricie' },
    { value: 'CENTRE_DU_QUEBEC', label: 'Centre-du-Québec' },
    { value: 'ESTRIE', label: 'Estrie' },
    { value: 'MONTREAL', label: 'Montréal' },
    { value: 'LAVAL', label: 'Laval' },
    { value: 'LANAUDIERE', label: 'Lanaudière' },
    { value: 'LAURENTIDES', label: 'Laurentides' },
    { value: 'MONTEREGIE', label: 'Montérégie' },
    { value: 'OUTAOUAIS', label: 'Outaouais' },
    { value: 'ABITIBI_TEMISCAMINGQUE', label: 'Abitibi-Témiscamingue' },
    { value: 'COTE_NORD', label: 'Côte-Nord' },
  ];

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
