import { Component, OnInit } from '@angular/core'
import { ProyectoService } from 'src/services/proyecto.service'

@Component({
    selector: 'app-proyectos-recientes',
    templateUrl: './proyectos-recientes.component.html',
    styleUrls: ['./proyectos-recientes.component.css']
})
export class ProyectosRecientes implements OnInit {
    proyectosRecientes: any[] = []

    constructor(private proyectoService: ProyectoService) {}

  ngOnInit(): void {
    this.cargarProyectosRecientes();
  }

  cargarProyectosRecientes(): void {
    this.proyectoService.obtenerRecientes().subscribe({
      next: (data) => {
        console.log('Proyectos recientes:', data);
        this.proyectosRecientes = data;
      },
      error: (err) => console.error('Error al cargar proyectos recientes:', err),
    });
  }
}