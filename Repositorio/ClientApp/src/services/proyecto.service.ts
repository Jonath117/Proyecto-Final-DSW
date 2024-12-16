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

  subirArchivo(archivo: File): Observable<{ ruta: string }> {
    const formData = new FormData();
    formData.append('file', archivo);
    return this.http.post<{ ruta: string }>(`${this.apiUrl}/subir-archivo`, formData);
  }

  crearProyecto(proyecto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/crear-proyecto`, proyecto);
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

  obtenerRecientes(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/recientes`);
  }

  obtenerProyectosPorUsuario(idUsuario: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/mis-proyectos/${idUsuario}`);
  }
  
}
