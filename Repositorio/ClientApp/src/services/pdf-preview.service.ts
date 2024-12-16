import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PdfPreviewService {
  private apiUrl = 'http://localhost:5122/PdfPreview'; // Base URL del controlador

  constructor(private http: HttpClient) {}

  // Método para obtener la vista previa del PDF
  obtenerVistaPrevia(rutaPdf: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/preview`, {
      params: { ruta: rutaPdf },
      responseType: 'blob', // La respuesta será un blob (imagen)
    });
  }
}
