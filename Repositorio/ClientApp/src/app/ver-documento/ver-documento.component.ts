/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-ver-documento',
  templateUrl: './ver-documento.component.html',
  styleUrls: ['./ver-documento.component.css'],
})
export class VerDocumentoComponent implements OnInit {
  proyecto: any = null;

  constructor(
    private route: ActivatedRoute,
    private proyectoService: ProyectoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Obtener el ID del proyecto desde la URL
    this.cargarProyecto(id);
  }

  cargarProyecto(id: number): void {
    this.proyectoService.obtenerPorId(id).subscribe({
      next: (data) => {
        console.log('Proyecto obtenido:', data);
        this.proyecto = data;
      },
      error: (err) => console.error('Error al obtener el proyecto:', err),
    });
  }

  descargarDocumento(): void {
    if (this.proyecto?.documentoPdf) {
      const link = document.createElement('a');
      link.href = `http://localhost:5122${this.proyecto.documentoPdf}`; // URL completa al archivo
      link.download = this.proyecto.documentoPdf.split('/').pop() || 'documento.pdf'; // Nombre del archivo
      link.target = '_blank';
      link.click();
    } else {
      console.warn('No se encontró el documento PDF asociado al proyecto.');
    }
  }
}*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from '../../services/proyecto.service';
import { ProyectoAprobacionService, ProyectoAprobacionDTO } from '../../services/proyecto.aprobacion.service';

@Component({
  selector: 'app-ver-documento',
  templateUrl: './ver-documento.component.html',
  styleUrls: ['./ver-documento.component.css'],
})
export class VerDocumentoComponent implements OnInit {
  proyecto: any = null;
  rolUsuario: string | null = localStorage.getItem('rol'); // Rol del usuario actual
  idUsuario: number | null = parseInt(localStorage.getItem('idUsuario') || '', 10); // ID del usuario actual
  comentarios: string = ''; // Comentarios del revisor

  constructor(
    private route: ActivatedRoute,
    private proyectoService: ProyectoService,
    private proyectoAprobacionService: ProyectoAprobacionService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Obtener el ID del proyecto desde la URL
    this.cargarProyecto(id);
  }

  cargarProyecto(id: number): void {
    this.proyectoService.obtenerPorId(id).subscribe({
      next: (data) => {
        this.proyecto = data;
        console.log('Proyecto obtenido:', data);
      },
      error: (err) => console.error('Error al obtener el proyecto:', err),
    });
  }

  descargarDocumento(): void {
    if (this.proyecto?.documentoPdf) {
      const link = document.createElement('a');
      link.href = `http://localhost:5122${this.proyecto.documentoPdf}`;
      link.download = this.proyecto.documentoPdf.split('/').pop() || 'documento.pdf';
      link.target = '_blank';
      link.click();
    } else {
      console.warn('No se encontró el documento PDF asociado al proyecto.');
    }
  }

  aprobar(): void {
    const aprobacionDTO: ProyectoAprobacionDTO = {
      idProyecto: this.proyecto.idproyecto,
      estatusAprobacion: 'Aprobado',
      comentariosAprobacion: this.comentarios || 'Aprobado correctamente.',
      idAprobador: this.idUsuario!,
      rolAprobador: localStorage.getItem('rol')!
    };

    this.proyectoAprobacionService.aprobarProyecto(aprobacionDTO).subscribe({
      next: () => {
        alert('El proyecto ha sido aprobado.');
        this.proyecto.estatusAprobacion = 'Aprobado'; // Actualizar localmente
      },
      error: (err) => console.error('Error al aprobar el proyecto:', err),
    });
  }

  rechazar(): void {
    const aprobacionDTO: ProyectoAprobacionDTO = {
      idProyecto: this.proyecto.idproyecto,
      estatusAprobacion: 'Rechazado',
      comentariosAprobacion: this.comentarios || 'Rechazado por criterios no cumplidos.',
      idAprobador: this.idUsuario!,
      rolAprobador: localStorage.getItem('rol')!
    };

    this.proyectoAprobacionService.aprobarProyecto(aprobacionDTO).subscribe({
      next: () => {
        alert('El proyecto ha sido rechazado.');
        this.proyecto.estatusAprobacion = 'Rechazado'; // Actualizar localmente
      },
      error: (err) => console.error('Error al rechazar el proyecto:', err),
    });
  }
}
