import { Component, OnInit } from '@angular/core';
import { ProyectoAprobacionService, ProyectoAprobacionDTO } from '../../services/proyecto.aprobacion.service';

@Component({
  selector: 'app-ver-archivos-pendientes',
  templateUrl: './ver-archivos-pendientes.component.html',
  styleUrls: ['./ver-archivos-pendientes.component.css'],
})
export class VerArchivosComponent implements OnInit {
  documentos: any[] = []; // Lista de documentos obtenidos del backend
  
  constructor(private proyectoAprobacionService: ProyectoAprobacionService) {}

  ngOnInit(): void {
    this.obtenerDocumentosPendientes();
  }

  obtenerDocumentosPendientes(): void {
    this.proyectoAprobacionService.obtenerProyectosPendientes().subscribe({
      next: (data) => {
        console.log('Documentos recibidos:', data);
        this.documentos = data; // Asignar los documentos a la propiedad para mostrarlos
      },
      error: (err) => console.error('Error al obtener documentos:', err),
    });
  }

  aprobar(id: number, comentarios: string): void {
    const aprobacionDTO: ProyectoAprobacionDTO = {
      idProyecto: id,
      estatusAprobacion: 'Aprobado',
      comentariosAprobacion: comentarios || 'Aprobado correctamente.', // Si no hay comentario, usa uno predeterminado
      idAprobador: parseInt(localStorage.getItem('idUsuario') || '0', 10),
      rolAprobador: 'Revisor', // ID del revisor actual
    };
  
    this.proyectoAprobacionService.aprobarProyecto(aprobacionDTO).subscribe({
      next: () => {
        console.log(`Documento con ID ${id} aprobado con comentario: "${comentarios}".`);
        this.obtenerDocumentosPendientes(); // Actualizar la lista de documentos
      },
      error: (err) => console.error(`Error al aprobar documento con ID ${id}:`, err),
    });
  }
  
  rechazar(id: number, comentarios: string): void {
    const aprobacionDTO: ProyectoAprobacionDTO = {
      idProyecto: id,
      estatusAprobacion: 'Rechazado',
      comentariosAprobacion: comentarios || 'Rechazado por criterios no cumplidos.', // Comentario predeterminado
      idAprobador: parseInt(localStorage.getItem('idUsuario') || '0', 10),
      rolAprobador: 'Revisor'
    };
  
    this.proyectoAprobacionService.aprobarProyecto(aprobacionDTO).subscribe({
      next: () => {
        console.log(`Documento con ID ${id} rechazado con comentario: "${comentarios}".`);
        this.obtenerDocumentosPendientes(); // Actualizar la lista de documentos
      },
      error: (err) => console.error(`Error al rechazar documento con ID ${id}:`, err),
    });
  }
  
}
