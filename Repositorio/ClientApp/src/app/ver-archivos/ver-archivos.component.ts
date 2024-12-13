/*import { Component, OnInit } from '@angular/core';
import { ExaminadorService } from '../services/examinador.service';

@Component({
  selector: 'app-ver-archivos',
  templateUrl: './ver-archivos.component.html',
  styleUrls: ['./ver-archivos.component.css'],
})
export class VerArchivosComponent implements OnInit {
  documentos: any[] = []; // Lista de documentos obtenidos del backend
  filtros = {
    fecha: '',
    autor: '',
    estado: '',
  }; // Filtros para la búsqueda

  constructor(private examinadorService: ExaminadorService) {}

  ngOnInit(): void {
    this.obtenerDocumentosPendientes();
  }

  obtenerDocumentosPendientes(): void {
    this.examinadorService.obtenerPendientes().subscribe({
      next: (data) => {
        console.log('Documentos recibidos:', data);
        this.documentos = data; // Asignar los documentos a la propiedad para mostrarlos
      },
      error: (err) => console.error('Error al obtener documentos:', err),
    });
  }

  // Método para aplicar filtros (puedes personalizarlo según tu lógica)
  aplicarFiltros(): void {
    console.log('Filtros aplicados:', this.filtros);
    // Aquí puedes filtrar `documentos` localmente o enviar los filtros al backend
  }

  aprobar(id: number): void {
    console.log(`Aprobando documento con ID: ${id}`);
    // Aquí llamarías a un servicio para aprobar el documento
  }

  rechazar(id: number): void {
    console.log(`Rechazando documento con ID: ${id}`);
    // Aquí llamarías a un servicio para rechazar el documento
  }

  visualizar(id: number): void {
    console.log(`Visualizando documento con ID: ${id}`);
    // Aquí puedes redirigir o abrir el documento en una vista detallada
  }
}
*/
import { Component, OnInit } from '@angular/core';
import { ProyectoAprobacionService, ProyectoAprobacionDTO } from '../../services/proyecto.aprobacion.service';

@Component({
  selector: 'app-ver-archivos',
  templateUrl: './ver-archivos.component.html',
  styleUrls: ['./ver-archivos.component.css'],
})
export class VerArchivosComponent implements OnInit {
  documentos: any[] = []; // Lista de documentos obtenidos del backend
  filtros = {
    fecha: '',
    autor: '',
    estado: '',
  }; // Filtros para la búsqueda

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

  // Método para aplicar filtros (puedes personalizarlo según tu lógica)
  aplicarFiltros(): void {
    console.log('Filtros aplicados:', this.filtros);
    // Aquí puedes filtrar `documentos` localmente o enviar los filtros al backend
  }

  aprobar(id: number): void {
    const aprobacionDTO: ProyectoAprobacionDTO = {
      idProyecto: id,
      comentarioAprobacion: 'Aprobado correctamente.',
    };

    this.proyectoAprobacionService.aprobarProyecto(aprobacionDTO).subscribe({
      next: () => {
        console.log(`Documento con ID ${id} aprobado.`);
        this.obtenerDocumentosPendientes(); // Actualizar la lista de documentos
      },
      error: (err) => console.error(`Error al aprobar documento con ID ${id}:`, err),
    });
  }

  rechazar(id: number): void {
    const aprobacionDTO: ProyectoAprobacionDTO = {
      idProyecto: id,
      comentarioAprobacion: 'Rechazado por criterios no cumplidos.',
    };

    this.proyectoAprobacionService.aprobarProyecto(aprobacionDTO).subscribe({
      next: () => {
        console.log(`Documento con ID ${id} rechazado.`);
        this.obtenerDocumentosPendientes(); // Actualizar la lista de documentos
      },
      error: (err) => console.error(`Error al rechazar documento con ID ${id}:`, err),
    });
  }

  visualizar(id: number): void {
    console.log(`Visualizando documento con ID: ${id}`);
    // Aquí puedes redirigir o abrir el documento en una vista detallada
  }
}
