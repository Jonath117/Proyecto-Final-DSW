import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'http://localhost:5122/Usuario'; // Base URL del controlador

  constructor(private http: HttpClient) {}

  obtenerUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  agregarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, usuario);
  }

  eliminarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  actualizarUsuario(usuario: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${usuario.id}`, usuario);
  }

  obtenerUsuarioPorId(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
