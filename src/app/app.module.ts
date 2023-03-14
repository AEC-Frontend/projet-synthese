import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { PageLoginComponent } from './page-login/page-login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent
  ],
=======
import { HttpClientModule } from '@angular/common/http';
import { DemandeDeStageService } from './services/demande-de-stage/demande-de-stage.service';
import { OffreDeStageService } from './services/offre-de-stage/offre-de-stage.service';
import { EntrepriseService } from './services/entreprise/entreprise.service';
import { CandidatService } from './services/candidat/candidat.service';

@NgModule({
  declarations: [AppComponent],
>>>>>>> 6dd3b22 (generate services)
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
    
=======
    HttpClientModule,
>>>>>>> 6dd3b22 (generate services)
  ],
  providers: [
    CandidatService,
    OffreDeStageService,
    EntrepriseService,
    DemandeDeStageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
