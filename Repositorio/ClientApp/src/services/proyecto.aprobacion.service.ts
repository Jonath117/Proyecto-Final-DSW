// proyecto-aprobacion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProyectoAprobacionDTO {
  idProyecto: number;
  comentarioAprobacion: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProyectoAprobacionService {
  private readonly apiUrl = 'http://localhost:5122/ProyectoAprobacion';

  constructor(private http: HttpClient) {}

  // Método para aprobar un proyecto
  aprobarProyecto(aprobacionDTO: ProyectoAprobacionDTO): Observable<any> {
    return this.http.put(`${this.apiUrl}/aprobar`, aprobacionDTO);
  }

  // Método para obtener proyectos pendientes
  obtenerProyectosPendientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pendientes`);
  }
}
