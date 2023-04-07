import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauDeBordPageComponent } from './pages/tableau-de-bord-page/tableau-de-bord-page.component';
import { DemandesDeStagePageComponent } from './pages/demandes-de-stage-page/demandes-de-stage-page.component';
import { EntreprisesPageComponent } from './pages/entreprises-page/entreprises-page.component';
import { OffresDeStagePageComponent } from './pages/offres-de-stage-page/offres-de-stage-page.component';
import { CandidatsPageComponent } from './pages/candidats-page/candidats-page.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { CandidatAjoutPageComponent } from './pages/candidat-ajout-page/candidat-ajout-page.component';
import { EntrepriseAjoutPageComponent } from './pages/entreprise-ajout-page/entreprise-ajout-page.component';

import { OffreDeStageDetailleeComponent } from './offre-de-stage-detaillee/offre-de-stage-detaillee.component';
import { DemandeDeStageComponent } from './pages/demande-de-stage/demande-de-stage.component';
import { OffreDeStageAjoutPageComponent } from './pages/offre-de-stage-ajout-page/offre-de-stage-ajout-page.component';
import { DemandeDeStageAjoutPageComponent } from './pages/demande-de-stage-ajout-page/demande-de-stage-ajout-page.component';
import { CandidatModifierPageComponent } from './pages/candidat-modifier-page/candidat-modifier-page.component';
import { EntrepriseDetailleeComponent } from './pages/entreprise-detaillee/entreprise-detaillee.component';
import { EntrepriseModifierPageComponent } from './pages/entreprise-modifier-page/entreprise-modifier-page.component';
import { OffreDeStageModifierPageComponent } from './pages/offre-de-stage-modifier-page/offre-de-stage-modifier-page.component';
import { CandidatDetailleComponent } from './pages/candidat-detaille/candidat-detaille.component';

const routes: Routes = [
  { path: '', redirectTo: 'page-login', pathMatch: 'full' },
  { path: 'page-login', component: PageLoginComponent },
  { path: 'tableau-de-bord', component: TableauDeBordPageComponent },
  {
    path: 'demandes-de-stage',
    children: [
      { path: '', component: DemandesDeStagePageComponent },
      {
        path: 'ajout',
        component: DemandeDeStageAjoutPageComponent,
      },
      { path: ':id', component: DemandeDeStageComponent },
    ],
  },
  {
    path: 'entreprises',
    children: [
      { path: '', component: EntreprisesPageComponent },
      { path: 'ajout', component: EntrepriseAjoutPageComponent },
      {
        path: ':id',
        children: [
          { path: '', component: EntrepriseDetailleeComponent },
          { path: 'edition', component: EntrepriseModifierPageComponent },
        ],
      },
    ],
  },
  {
    path: 'offres-de-stage',
    children: [
      { path: '', component: OffresDeStagePageComponent },
      { path: 'ajout', component: OffreDeStageAjoutPageComponent },
      {
        path: ':id',
        children: [
          {
            path: '',
            component: OffreDeStageDetailleeComponent,
          },
          { path: 'edition', component: OffreDeStageModifierPageComponent },
        ],
      },
    ],
  },
  {
    path: 'candidats',
    children: [
      { path: '', component: CandidatsPageComponent },
      { path: 'ajout', component: CandidatAjoutPageComponent },
      {
        path: ':id',
        children: [
          { path: '', component: CandidatDetailleComponent },
          { path: 'edition', component: CandidatModifierPageComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
