import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  readonly baseUrl = signal('/api');

  constructor(private readonly http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl()}${url}`);
  }

  post<T>(url: string, body: unknown): Observable<T> {
    return this.http.post<T>(`${this.baseUrl()}${url}`, body);
  }
}
