import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExaminadorService {
  private apiUrl = 'http://localhost:5098/api/examinador'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) {}

  obtenerPendientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pendientes`);
  }

  aprobarDocumento(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/aprobar/${id}`, {});
  }

  rechazarDocumento(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/rechazar/${id}`, {});
  }
}
