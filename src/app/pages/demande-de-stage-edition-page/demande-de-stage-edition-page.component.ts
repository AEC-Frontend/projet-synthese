import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DialogConfirmationComponent } from 'src/app/components/dialog-confirmation/dialog-confirmation.component';
import { DemandeDeStage } from 'src/app/models';
import { DemandeDeStageService } from 'src/app/services/demande-de-stage/demande-de-stage.service';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import {
  ACTIVITY_SECTOR,
  NOMBRE_HEURES_SEMAINE,
  REGIONS,
  RENUMERATION,
  TYPE_DE_STAGE,
} from 'src/constants';

@Component({
  selector: 'app-demande-de-stage-edition-page',
  templateUrl: './demande-de-stage-edition-page.component.html',
  styleUrls: ['./demande-de-stage-edition-page.component.scss'],
})
export class DemandeDeStageEditionPageComponent {
  demandeDeStage$!: Observable<{ success: boolean; data?: DemandeDeStage }>;
  demandeDeStage: DemandeDeStage | null = null;
  entreprises: Array<{ value: string; label: string }> = [];
  typeDeStage = TYPE_DE_STAGE;
  nombreHeuresSemaine = NOMBRE_HEURES_SEMAINE;
  renumeration = RENUMERATION;
  activitySector = ACTIVITY_SECTOR;
  regions = REGIONS;
  stageForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private demandeDeStageService: DemandeDeStageService,
    private entrepriseService: EntrepriseService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  onSubmit = () => {
    if (this.stageForm!.status === 'INVALID') {
      this.stageForm;

      Object.keys(this.stageForm!.controls).forEach((key) => {
        const control =
          this.stageForm!.controls[key as keyof typeof this.stageForm.controls];

        if (control.status === 'INVALID') {
          control.markAsDirty();
        }
      });
    }

    if (this.stageForm!.status === 'VALID') {
      this.loading = true;
      this.demandeDeStageService
        .updateDemandeDeStage(
          {
            ...this.stageForm!.getRawValue(),
            hoursPerWeek: parseInt(
              this.stageForm!.controls['hoursPerWeek'].value
            ),
            paid: 'false' ? false : true,
            region: {
              value: this.stageForm!.controls['region'].value,
              label: this.regions.find(
                (region) =>
                  region.value === this.stageForm!.controls['region'].value
              )!.label,
            },
            stageType: {
              value: this.stageForm!.controls['stageType'].value,
              label: this.typeDeStage.find(
                (tds) =>
                  tds.value === this.stageForm!.controls['stageType'].value
              )!.label,
            },
          },
          this.demandeDeStage!._id
        )
        .subscribe(() => {
          this.openDemandeDeStageAdditionConfirmation();
          this.loading = false;
        });
    }
  };

  ngOnInit() {
    this.loading = true;
    this.demandeDeStage$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        if (id) {
          return this.demandeDeStageService.getDemandeDeStage(id);
        }
        return this.demandeDeStage$;
      })
    );

    this.demandeDeStage$.subscribe((demandeDeStage) => {
      this.loading = false;
      if (demandeDeStage.data) {
        this.stageForm = this.formBuilder.nonNullable.group({
          enterprise: ['', Validators.required],
          resume: [''],
          city: [demandeDeStage.data.city, Validators.required],
          activitySector: [
            demandeDeStage.data.activitySector.value,
            Validators.required,
          ],
          active: [demandeDeStage.data.active],
          published: [demandeDeStage.data.published],
          paid: [demandeDeStage.data.paid],
          additionalInfo: [demandeDeStage.data.additionalInfo],
          hoursPerWeek: [demandeDeStage.data.hoursPerWeek, Validators.required],
          requirements: [demandeDeStage.data.requirements, Validators.required],
          program: [demandeDeStage.data.program, Validators.required],
          stageType: [demandeDeStage.data.stageType.value, Validators.required],
          endDate: [demandeDeStage.data.endDate, Validators.required],
          startDate: [demandeDeStage.data.startDate, Validators.required],
          description: [demandeDeStage.data.description, Validators.required],
          titre: [demandeDeStage.data.titre, Validators.required],
          region: [demandeDeStage.data.region, Validators.required],
          // name: ['', Validators.required],
        });
        this.demandeDeStage = demandeDeStage.data;
      }
    });

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
    const controls = this.stageForm!.controls;
    const formControl = Object.keys(controls).find((key) => key === formName);

    if (formControl) {
      return controls[formControl as keyof typeof controls];
    }
    return null;
  }
}
