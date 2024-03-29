import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OffreDeStage, OffreDeStagePost } from 'src/app/models';
import { API_SECRET_KEY, API_URL } from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class OffreDeStageService {
  private url = `${API_URL}stages`;
  private secretKey = API_SECRET_KEY;
  private httpOptions = {
    headers: {
      'Content-type': 'application/json',
      Authorization: this.secretKey,
    },
  };

  constructor(private http: HttpClient) {}

  getOffreDeStages(): Observable<{ success: boolean; data?: OffreDeStage[] }> {
    return this.http.get<{ success: boolean; data?: OffreDeStage[] }>(
      this.url,
      this.httpOptions
    );
  }

  getOffreDeStage(
    _id: string
  ): Observable<{ success: boolean; data?: OffreDeStage }> {
    return this.http.get<{ success: boolean; data?: OffreDeStage }>(
      `${this.url}/${_id}`,
      this.httpOptions
    );
  }

  createOffreDeStage(
    offreDeStage: OffreDeStagePost
  ): Observable<{ success: boolean; data?: OffreDeStage }> {
    return this.http.post<{ success: boolean; data?: OffreDeStage }>(
      this.url,
      { input: offreDeStage },
      this.httpOptions
    );
  }

  updateOffreDeStage(
    offreDeStage: Partial<OffreDeStage>,
    _id: string
  ): Observable<{ success: boolean; data?: OffreDeStage }> {
    return this.http.patch<{ success: boolean; data?: OffreDeStage }>(
      `${this.url}/${_id}`,
      { input: offreDeStage },
      this.httpOptions
    );
  }

  deleteOffreDeStage(
    _id: string
  ): Observable<{ success: boolean; data?: OffreDeStage }> {
    return this.http.delete<{ success: boolean; data?: OffreDeStage }>(
      `${this.url}/${_id}`,
      this.httpOptions
    );
  }
}
