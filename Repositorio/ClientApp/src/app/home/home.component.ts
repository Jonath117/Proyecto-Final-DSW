import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  rol: string | null = null;

  ngOnInit(): void {
    // Leer el rol desde localStorage
    this.rol = localStorage.getItem('rol');
  }

  cerrarSesion(): void {
    localStorage.removeItem('rol'); // Eliminar el rol del almacenamiento
    this.rol = null; // Resetear la variable
  }
}
