import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DialogConfirmationComponent } from 'src/app/components/dialog-confirmation/dialog-confirmation.component';
import { Entreprise, OffreDeStage } from 'src/app/models';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { OffreDeStageService } from 'src/app/services/offre-de-stage/offre-de-stage.service';
import { TSelectOption } from 'src/app/types/TSelectOption';

@Component({
  selector: 'app-offre-de-stage-modifier-page',
  templateUrl: './offre-de-stage-modifier-page.component.html',
  styleUrls: ['./offre-de-stage-modifier-page.component.scss'],
})
export class OffreDeStageModifierPageComponent {
  offreDeStage$!: Observable<{ success: boolean; data?: OffreDeStage }>;
  entreprise$!: Observable<{ success: boolean; data?: Entreprise }>;
  entrepriseName: string = '';

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

  stageForm!: FormGroup;
  stageId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private offreDeStageService: OffreDeStageService,
    private entrepriseService: EntrepriseService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.offreDeStage$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.offreDeStageService.getOffreDeStage(params.get('id')!)
      )
    );

    this.offreDeStage$.subscribe((offreDeStage) => {
      if (offreDeStage.data) {
        this.stageForm = this.formBuilder.nonNullable.group({
          active: [true],
          published: [true],
          paid: [false],
          additionalInfo: [offreDeStage.data.additionalInfo],
          hoursPerWeek: [offreDeStage.data.hoursPerWeek, Validators.required],
          stageType: [offreDeStage.data.stageType, Validators.required],
          requirements: [offreDeStage.data.requirements, Validators.required],
          program: [offreDeStage.data.program, Validators.required],
          endDate: [offreDeStage.data.endDate, Validators.required],
          startDate: [offreDeStage.data.startDate, Validators.required],
          description: [offreDeStage.data.description, Validators.required],
        });

        this.entreprise$ = this.entrepriseService.getEntreprise(
          offreDeStage.data.enterprise
        );

        this.entreprise$.subscribe((entreprise) => {
          if (entreprise.data) {
            this.entrepriseService
              .getEntreprise(entreprise.data._id!)
              .subscribe((e) => {
                if (e.data) {
                  this.entrepriseName = e.data.name;
                }
              });
          }
        });

        this.stageId = offreDeStage.data._id!;
      }
    });
  }

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
        .updateOffreDeStage(
          {
            ...this.stageForm.getRawValue(),
            hoursPerWeek: parseInt(
              this.stageForm.controls['hoursPerWeek'].value
            ),
            paid: 'false' ? false : true,
          },
          this.stageId
        )
        .subscribe(() => {
          this.openOffreDeStageAdditionConfirmation();
          this.stageForm.reset();
        });
    }
  };

  openOffreDeStageAdditionConfirmation(): void {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: { textMessage: "L'offre de stage a été modifié avec succès!" },
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
