import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentoService {
  crearDocumento(documento: { Titulo: string; Autores: string; Categoria: string; TipoDocumento: string; PalabrasClave: string; FechaPublicacion: string; }) {
  throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:5098/api/busqueda'; // Cambia la URL según tu backend

  constructor(private http: HttpClient) {}

  subirDocumento(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/subir`, formData);
  }

  buscarDocumentos(filtros: any): Observable<any[]> {
    const params = new HttpParams()
      .set('titulo', filtros.titulo || '')
      .set('categoria', filtros.categoria || '');

    return this.http.get<any[]>(`${this.apiUrl}/buscar`, { params });
  }

}
