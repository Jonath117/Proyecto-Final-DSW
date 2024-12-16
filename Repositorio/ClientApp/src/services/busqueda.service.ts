import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FiltroService {
  private apiUrl = 'http://localhost:5122/ProyectoFiltro'; // Base URL del controlador

  constructor(private http: HttpClient) {}

  // Método para filtrar documentos
  buscarDocumentos(filtro: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/filtrar`, filtro);
  }
}
