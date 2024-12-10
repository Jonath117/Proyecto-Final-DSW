import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent {
  correo: string = '';
  password: string = '';
  mensajeError: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  iniciarSesion(): void {
    const datos = { Correo: this.correo, Password: this.password };
  
    this.authService.iniciarSesion(datos.Correo, datos.Password).subscribe({
      next: (response) => {
        if (response && response.rol) {
          localStorage.setItem('rol', response.rol); // Guardar el rol recibido
          this.router.navigate(['/']); // Redirigir al Home
        } else {
          console.error('El campo Rol no se recibió en la respuesta:', response);
          this.mensajeError = 'Error al iniciar sesión. Inténtalo de nuevo.';
        }
      },
      error: (err) => {
        console.error('Error al iniciar sesión:', err);
        this.mensajeError = 'Credenciales inválidas. Inténtalo de nuevo.';
      },
    });
  }
  

}

/*
iniciarSesion(): void {
  const datos = { Correo: this.correo, Password: this.password };

  this.authService.iniciarSesion(datos.Correo, datos.Password).subscribe({
    next: (response) => {
      localStorage.setItem('rol', response.Rol); // Guardar el rol en localStorage
      this.router.navigate(['/']); // Redirigir al Home
    },
    error: (err) => {
      console.error('Error al iniciar sesión:', err);
      this.mensajeError = 'Credenciales inválidas. Inténtalo de nuevo.';
    },
  });
}
*/
