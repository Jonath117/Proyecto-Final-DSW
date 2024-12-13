import { Component, OnInit } from '@angular/core';
import { AreasConocimientoService } from '../../services/areas-conocimiento.service';
import { ProyectoService } from '../../services/proyecto.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  rol: string | null = null;
  areas: any[] = []
  proyectos: any[] = []
  terminoBusqueda: string = '';

  constructor(private areasService: AreasConocimientoService, 
    private proyectoService: ProyectoService,
    private router: Router) {}
  ngOnInit(): void {
    // Leer el rol desde localStorage
    this.rol = localStorage.getItem('rol');
    this.obtenerAreas();
    this.obtenerProyectos();
  }

  cerrarSesion(): void {
    localStorage.removeItem('rol'); // Eliminar el rol del almacenamiento
    this.rol = null; // Resetear la variable
  }
  obtenerAreas(): void {
    this.areasService.obtenerTodas().subscribe({
      next: (data) => {
        console.log('Áreas recibidas:', data);
        this.areas = data;
      },
      error: (err) => console.error('Error al obtener áreas:', err),
    });
  }

  obtenerProyectos(): void {
    this.proyectoService.obtenerTodos().subscribe({
      next: (data) => {
        console.log('Proyectos obtenidos:', data);
        this.proyectos = data;
      },
      error: (err) => console.error('Error al obtener proyectos:', err),
    });
  }

  redirigirABusqueda(): void {
    this.router.navigate(['/busqueda-avanzada'], {
      queryParams: { termino: this.terminoBusqueda }, // Pasa el término como parámetro de consulta
    });
  }
}
