import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeDeStage, DemandeDeStagePost } from 'src/app/models';
import { API_SECRET_KEY, API_URL } from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class DemandeDeStageService {
  private url = `${API_URL}stagesRequests`;
  private secretKey = API_SECRET_KEY;
  private httpOptions = {
    headers: {
      'Content-type': 'application/json',
      Authorization: this.secretKey,
    },
  };

  constructor(private http: HttpClient) {}

  getDemandeDeStages(): Observable<{
    success: boolean;
    data?: DemandeDeStage[];
  }> {
    return this.http.get<{ success: boolean; data?: DemandeDeStage[] }>(
      this.url,
      this.httpOptions
    );
  }

  getDemandeDeStage(
    _id: string
  ): Observable<{ success: boolean; data?: DemandeDeStage }> {
    return this.http.get<{ success: boolean; data?: DemandeDeStage }>(
      `${this.url}/${_id}`,
      this.httpOptions
    );
  }

  createDemandeDeStage(
    entreprise: DemandeDeStagePost
  ): Observable<{ success: boolean; data?: DemandeDeStagePost }> {
    return this.http.post<{ success: boolean; data?: DemandeDeStagePost }>(
      this.url,
      entreprise,
      this.httpOptions
    );
  }

  updateDemandeDeStage(
    entreprise: Partial<DemandeDeStage>,
    _id: string
  ): Observable<{ success: boolean; data?: DemandeDeStage }> {
    return this.http.patch<{ success: boolean; data?: DemandeDeStage }>(
      `${this.url}/${_id}`,
      entreprise,
      this.httpOptions
    );
  }

  deleteDemandeDeStage(
    _id: string
  ): Observable<{ success: boolean; data?: DemandeDeStage }> {
    return this.http.delete<{ success: boolean; data?: DemandeDeStage }>(
      `${this.url}/${_id}`,
      this.httpOptions
    );
  }
}
