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
import { TableauBordDemandesStageComponent } from './components/tableau-bord-demandes-stage/tableau-bord-demandes-stage.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CandidatAjoutPageComponent } from './pages/candidat-ajout-page/candidat-ajout-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogConfirmationComponent } from './components/dialog-confirmation/dialog-confirmation.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UpperNavLinkComponent } from './components/upper-nav-link/upper-nav-link.component';
import { EntrepriseAjoutPageComponent } from './pages/entreprise-ajout-page/entreprise-ajout-page.component';
import { MatCardModule } from '@angular/material/card';

import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';


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
    SidenavComponent,
    CandidatAjoutPageComponent,
    DialogConfirmationComponent,
    UpperNavLinkComponent,
    EntrepriseAjoutPageComponent,
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
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  providers: [
    DemandeDeStageService,
    OffreDeStageService,
    EntrepriseService,
    CandidatService,
    MatButtonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
