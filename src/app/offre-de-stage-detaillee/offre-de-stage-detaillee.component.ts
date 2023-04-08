import { Component, Input, OnInit } from '@angular/core';
import { OffreDeStageService } from '../services/offre-de-stage/offre-de-stage.service';
import { OffreDeStage } from '../models';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-offre-de-stage-detaillee',
  templateUrl: './offre-de-stage-detaillee.component.html',
  styleUrls: ['./offre-de-stage-detaillee.component.scss'],
})
export class OffreDeStageDetailleeComponent {
  offreDeStage$!: Observable<{ success: boolean; data?: OffreDeStage }>;

  constructor(
    private offredeStageService: OffreDeStageService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.offreDeStage$ = this.getCurrentOffreDeStage();
  }

  getCurrentOffreDeStage() {
    return this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.offredeStageService.getOffreDeStage(params.get('id')!)
      )
    );
  }

  handlePublish(id: string) {
    this.offredeStageService
      .updateOffreDeStage({ published: true }, id)
      .subscribe(() => {
        this.showSnackBar("L'offre de stage a bien été publiée");
        this.router.navigate(['/tableau-de-bord']);
      });
  }

  handleDontPublish(id: string) {
    this.offredeStageService
      .updateOffreDeStage({ published: false }, id)
      .subscribe(() => {
        this.showSnackBar("L'offre de stage n'a pas été publiée");
        this.router.navigate(['/tableau-de-bord']);
      });
  }

  showSnackBar(message: string, action?: string) {
    this._snackBar
      .open(message, action)
      .afterOpened()
      .subscribe(() => {
        setTimeout(() => {
          this._snackBar.dismiss();
        }, 5000);
      });
  }
}
