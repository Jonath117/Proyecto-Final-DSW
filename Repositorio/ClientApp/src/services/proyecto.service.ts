import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  private apiUrl = 'http://localhost:5122/Proyecto'; // Base URL del controlador

  constructor(private http: HttpClient) {}

  // Obtener todos los proyectos
  obtenerTodos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetAllProyectos`);
  }

  // Obtener proyecto por ID
  obtenerPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo proyecto
  subirDocumentoConArchivo(documento: any, archivo: File): Observable<any> {
    const formData = new FormData();

    // Agregar el documento como JSON en el campo "documento"
    formData.append('documento', new Blob([JSON.stringify(documento)], { type: 'application/json' }));

    // Agregar el archivo
    formData.append('archivo', archivo);

    // Hacer la solicitud POST al endpoint
    return this.http.post<any>(`${this.apiUrl}/subir`, formData);
  }

  // Actualizar un proyecto existente
  actualizarProyecto(id: number, proyecto: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, proyecto);
  }

  // Eliminar un proyecto
  eliminarProyecto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Buscar proyectos por término
  buscarProyectos(termino: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/buscar`, {
      params: { termino },
    });
  }
}
