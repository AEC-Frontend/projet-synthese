import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entreprise } from 'src/app/models';
import { API_SECRET_KEY, API_URL } from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class EntrepriseService {
  private url = `${API_URL}enterprises`;
  private secretKey = API_SECRET_KEY;
  private httpOptions = {
    headers: {
      'Content-type': 'application/json',
      Authorization: this.secretKey,
    },
  };

  constructor(private http: HttpClient) {}

  getEntreprises(): Observable<{ success: boolean; data?: Entreprise[] }> {
    return this.http.get<{ success: boolean; data?: Entreprise[] }>(
      this.url,
      this.httpOptions
    );
  }

  getEntreprise(
    _id: string
  ): Observable<{ success: boolean; data?: Entreprise }> {
    return this.http.get<{ success: boolean; data?: Entreprise }>(
      `${this.url}/${_id}`,
      this.httpOptions
    );
  }

  createEntreprise(
    entreprise: Entreprise
  ): Observable<{ success: boolean; data?: Entreprise }> {
    return this.http.post<{ success: boolean; data?: Entreprise }>(
      this.url,
      entreprise,
      this.httpOptions
    );
  }

  updateEntreprise(
    entreprise: Partial<Entreprise>,
    _id: string
  ): Observable<{ success: boolean; data?: Entreprise }> {
    return this.http.patch<{ success: boolean; data?: Entreprise }>(
      `${this.url}/${_id}`,
      entreprise,
      this.httpOptions
    );
  }

  deleteEntreprise(
    _id: string
  ): Observable<{ success: boolean; data?: Entreprise }> {
    return this.http.delete<{ success: boolean; data?: Entreprise }>(
      `${this.url}/${_id}`,
      this.httpOptions
    );
  }
}
