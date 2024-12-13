import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TiposTrabajoService {
  private apiUrl = 'http://localhost:5122/TiposTrabajo'; // Base URL del controlador

  constructor(private http: HttpClient) {}

  // Método para obtener todos los tipos de trabajo
  obtenerTiposTrabajo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
