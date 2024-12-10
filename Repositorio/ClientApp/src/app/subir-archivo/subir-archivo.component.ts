import { Component } from '@angular/core';
import { DocumentoService } from '../services/documento.service';

@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent {
  // Propiedades para el formulario
  titulo: string = '';
  autores: string = '';
  categoria: string = '';
  tipoDocumento: string = '';
  palabrasClave: string = '';
  fechaPublicacion: string = '';

  constructor(private documentoService: DocumentoService) {}

  // Método para manejar el envío del formulario
  subirArchivo(): void {
    const documento = {
      Titulo: this.titulo,
      Autores: this.autores,
      Categoria: this.categoria,
      TipoDocumento: this.tipoDocumento,
      PalabrasClave: this.palabrasClave,
      FechaPublicacion: this.fechaPublicacion,
    };

    this.documentoService.crearDocumento(documento).subscribe({
      next: (response: any) => console.log('Documento subido exitosamente:', response),
      error: (err: any) => console.error('Error al subir el documento:', err),
    });
  }
}
