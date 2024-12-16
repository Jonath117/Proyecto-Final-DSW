import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5122/Auth';
  private rolSubject: BehaviorSubject<string | null>; // BehaviorSubject para el rol
  public rol$: Observable<string | null>; // Observable que los componentes pueden suscribirse

  constructor(private http: HttpClient) {
    // Inicializa el rol desde localStorage si existe
    const storedRol = localStorage.getItem('rol');
    this.rolSubject = new BehaviorSubject<string | null>(storedRol);
    this.rol$ = this.rolSubject.asObservable();
  }

  iniciarSesion(correo: string, password: string): Observable<any> {
    const payload = { correo, contraseña: password }; // Coincide con el DTO esperado en el backend
    return this.http.post<any>(`${this.apiUrl}/login`, payload);
  }

  guardarRol(rol: string): void {
    localStorage.setItem('rol', rol);
    this.rolSubject.next(rol); // Actualiza el estado del rol
  }

  obtenerRol(): string | null {
    return this.rolSubject.value; // Devuelve el valor actual del rol
  }

  cerrarSesion(): void {
    localStorage.removeItem('rol');
    this.rolSubject.next(null); // Resetea el estado del rol
  }
}


/*
export class AuthService {
  iniciarSesion(correo: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { Correo: correo, Password: password });
}
  private apiUrl = 'http://localhost:5098/api/login'; // Endpoint del backend
  private rol: string | null = null;

  constructor(private http: HttpClient) {}

  login(correo: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { correo, password });
  }

  setRol(rol: string) {
    this.rol = rol;
    localStorage.setItem('rol', rol); // Opcional: guardar en localStorage
  }

  getRol(): string | null {
    return this.rol || localStorage.getItem('rol');
  }

  logout() {
    this.rol = null;
    localStorage.removeItem('rol');
  }
}
*/