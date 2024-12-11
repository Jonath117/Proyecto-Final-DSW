import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  private apiUrl = 'http://localhost:5098/api/documentos'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) {}

  subirDocumento(formData: FormData): Observable<any> {
    return this.http.post<any>('http://localhost:5098/api/documentos/subir', formData);
  }
  
  
  crearDocumento(documento: any): Observable<any> {
    console.log('Enviando documento:', documento);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, documento, { headers });
}
}
