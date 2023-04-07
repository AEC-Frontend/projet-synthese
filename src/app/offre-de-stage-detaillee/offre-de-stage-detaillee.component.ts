import { Component, Input, OnInit } from '@angular/core';
import { OffreDeStageService } from '../services/offre-de-stage/offre-de-stage.service';
import { OffreDeStage } from '../models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-offre-de-stage-detaillee',
  templateUrl: './offre-de-stage-detaillee.component.html',
  styleUrls: ['./offre-de-stage-detaillee.component.scss'],
})
export class OffreDeStageDetailleeComponent {
  offreDeStage$!: Observable<{ success: boolean; data?: OffreDeStage }>;

  constructor(
    private offredeStageService: OffreDeStageService,
    private route: ActivatedRoute
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

  deleteOffreDeStage(_id: string) {
    this.offredeStageService
      .deleteOffreDeStage(_id?.valueOf())
      .subscribe((_) => {
        this.offreDeStage$ = this.getCurrentOffreDeStage();
      });
  }
}
