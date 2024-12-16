import { Component, OnInit } from '@angular/core';
import { ProyectoAprobacionService, ProyectoAprobacionDTO } from '../../services/proyecto.aprobacion.service';

@Component({
  selector: 'app-ver-pendientes-admin',
  templateUrl: './ver-pendientes-admin.component.html',
  styleUrls: ['./ver-pendientes-admin.component.css'],
})
export class VerArchivosAdminComponent implements OnInit {
  documentos: any[] = [];

  constructor(private proyectoAprobacionService: ProyectoAprobacionService) {}

  ngOnInit(): void {
    this.obtenerProyectosParcialmenteAprobados();
  }

  obtenerProyectosParcialmenteAprobados(): void {
    this.proyectoAprobacionService.obtenerProyectosParcialmenteAprobados().subscribe({
      next: (data) => {
        this.documentos = data;
      },
      error: (err) => console.error('Error al obtener documentos:', err),
    });
  }

  aprobar(id: number, comentarios: string): void {
    const aprobacionDTO: ProyectoAprobacionDTO = {
      idProyecto: id,
      estatusAprobacion: 'Aprobado',
      comentariosAprobacion: comentarios,
      idAprobador: parseInt(localStorage.getItem('idUsuario') || '0', 10),
      rolAprobador: 'Administrador',
    };

    this.proyectoAprobacionService.aprobarProyecto(aprobacionDTO).subscribe({
      next: () => this.obtenerProyectosParcialmenteAprobados(),
      error: (err) => console.error(`Error al aprobar documento con ID ${id}:`, err),
    });
  }

  rechazar(id: number, comentarios: string): void {
    const aprobacionDTO: ProyectoAprobacionDTO = {
      idProyecto: id,
      estatusAprobacion: 'Pendiente',
      comentariosAprobacion: comentarios,
      idAprobador: parseInt(localStorage.getItem('idUsuario') || '0', 10),
      rolAprobador: 'Administrador',
    };

    this.proyectoAprobacionService.aprobarProyecto(aprobacionDTO).subscribe({
      next: () => this.obtenerProyectosParcialmenteAprobados(),
      error: (err) => console.error(`Error al rechazar documento con ID ${id}:`, err),
    });
  }
}
