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

const routes: Routes = [
  { path: '', redirectTo: 'page-login', pathMatch: 'full' },
  { path: 'page-login', component: PageLoginComponent },
  { path: 'tableau-de-bord', component: TableauDeBordPageComponent },
  { path: 'demandes-de-stage', component: DemandesDeStagePageComponent },
  { path: 'entreprises', component: EntreprisesPageComponent },
  { path: 'offres-de-stage', component: OffresDeStagePageComponent },
  { path: 'candidats', component: CandidatsPageComponent },
  { path: 'candidats/ajout', component: CandidatAjoutPageComponent },
  { path: 'entreprises/ajout', component: EntrepriseAjoutPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
