import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_SECRET_KEY, API_URL } from 'src/constants';
import { Observable } from 'rxjs';
import { Candidat } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class CandidatService {
  private url = `${API_URL}candiadtes`;
  private secretKey = API_SECRET_KEY;
  private httpOptions = {
    headers: {
      'Content-type': 'application/json',
      Authorization: this.secretKey,
    },
  };

  constructor(private http: HttpClient) {}

  getCandidats(): Observable<{ success: boolean; data?: Candidat[] }> {
    return this.http.get<{ success: boolean; data?: Candidat[] }>(
      this.url,
      this.httpOptions
    );
  }

  getCandidat(_id: string): Observable<{ success: boolean; data?: Candidat }> {
    return this.http.get<{ success: boolean; data?: Candidat }>(
      `${this.url}/${_id}`,
      this.httpOptions
    );
  }

  createCandidat(
    candidat: Candidat
  ): Observable<{ success: boolean; data?: Candidat }> {
    return this.http.post<{ success: boolean; data?: Candidat }>(
      this.url,
      { input: candidat },
      this.httpOptions
    );
  }

  updateCandidat(
    candidat: Partial<Candidat>,
    _id: string
  ): Observable<{ success: boolean; data?: Candidat }> {
    return this.http.patch<{ success: boolean; data?: Candidat }>(
      `${this.url}/${_id}`,
      { input: candidat },
      this.httpOptions
    );
  }

  deleteCandidat(
    _id: string
  ): Observable<{ success: boolean; data?: Candidat }> {
    return this.http.delete<{ success: boolean; data?: Candidat }>(
      `${this.url}/${_id}`,
      this.httpOptions
    );
  }
}
