import { Component } from '@angular/core';
import { DocumentoService } from '../services/busqueda.service';

@Component({
  selector: 'app-busqueda-avanzada',
  templateUrl: './busqueda-avanzada.component.html',
  styleUrls: ['./busqueda-avanzada.component.css'],
})
export class BusquedaAvanzadaComponent {
  titulo = '';
  categoria = '';
  resultados: any[] = [];

  constructor(private documentoService: DocumentoService) {}

  buscarDocumentos(): void {
    const filtros = {
      titulo: this.titulo,
      categoria: this.categoria,
    };

    this.documentoService.buscarDocumentos(filtros).subscribe({
      next: (response) => (this.resultados = response),
      error: (err) => console.error('Error en la búsqueda:', err),
    });
  }
}
