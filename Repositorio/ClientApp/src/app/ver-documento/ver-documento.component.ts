import { Component, OnInit } from '@angular/core';
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
}
