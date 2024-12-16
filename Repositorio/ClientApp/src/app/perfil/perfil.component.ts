import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ProyectoService } from 'src/services/proyecto.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  usuario: any = null; // Almacena la información del usuario
  idUsuario: number | null = null; // ID del usuario actual
  proyectos: any[] = []

  constructor(
    private usuarioService: UsuarioService,
    private proyectoService: ProyectoService
  ) {}

  ngOnInit(): void {
    this.obtenerIdUsuario();
    if (this.idUsuario) {
      this.cargarPerfil();
      this.cargarProyectos();
    }
  }

  // Obtiene el ID del usuario desde el localStorage
  obtenerIdUsuario(): void {
    const id = localStorage.getItem('idUsuario');
    if (id) {
      this.idUsuario = parseInt(id, 10); // Convertir a número
    } else {
      console.error('No se encontró la variable idUsuario en localStorage.');
    }
  }

  // Carga los datos del perfil del usuario
  cargarPerfil(): void {
    this.usuarioService.obtenerUsuarioPorId(this.idUsuario!).subscribe({
      next: (data) => {
        this.usuario = data; // Asigna la información del usuario
      },
      error: (err) => console.error('Error al cargar el perfil:', err),
    });
  }
  cargarProyectos(): void {
    this.proyectoService.obtenerProyectosPorUsuario(this.idUsuario!).subscribe({
      next: (data) => {
        this.proyectos = data; // Asigna la lista de proyectos
      },
      error: (err) => console.error('Error al cargar los proyectos:', err),
    });
  }
}
