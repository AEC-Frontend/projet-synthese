import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TableauDeBordPageComponent } from './pages/tableau-de-bord-page/tableau-de-bord-page.component';
import { DemandesDeStagePageComponent } from './pages/demandes-de-stage-page/demandes-de-stage-page.component';
import { OffresDeStagePageComponent } from './pages/offres-de-stage-page/offres-de-stage-page.component';
import { EntreprisesPageComponent } from './pages/entreprises-page/entreprises-page.component';
import { CandidatsPageComponent } from './pages/candidats-page/candidats-page.component';
import { HttpClientModule } from '@angular/common/http';
import { DemandeDeStageService } from './services/demande-de-stage/demande-de-stage.service';
import { OffreDeStageService } from './services/offre-de-stage/offre-de-stage.service';
import { EntrepriseService } from './services/entreprise/entreprise.service';
import { CandidatService } from './services/candidat/candidat.service';
import { TableauBordDemandesStageComponent } from './tableau-bord-demandes-stage/tableau-bord-demandes-stage.component';

import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    TableauDeBordPageComponent,
    DemandesDeStagePageComponent,
    OffresDeStagePageComponent,
    EntreprisesPageComponent,
    CandidatsPageComponent,
    TableauBordDemandesStageComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [
    DemandeDeStageService,
    OffreDeStageService,
    EntrepriseService,
    CandidatService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
