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
  formato: any;

  constructor(private documentoService: DocumentoService) {}

  // Método para manejar el envío del formulario
    subirArchivo(): void {
    if (!this.selectedFile) {
      console.error('No se seleccionó ningún archivo.');
      return;
    }
  
    const formData = new FormData();
  
    // Agregar campos al FormData
    formData.append('Titulo', this.titulo);
    formData.append('Autores', this.autores);
    formData.append('Categoria', this.categoria);
    formData.append('TipoDocumento', this.tipoDocumento);
    formData.append('PalabrasClave', this.palabrasClave);
    formData.append('FechaPublicacion', this.fechaPublicacion);
    formData.append('Archivo', this.selectedFile, this.selectedFile.name);
  
    this.documentoService.subirDocumento(formData).subscribe({
      next: (response: any) => console.log('Documento y archivo subidos exitosamente:', response),
      error: (err: any) => console.error('Error al subir el documento:', err),
    });
  }
  
  

  selectedFile: File | null = null;

  onFileSelected(event: any): void {
      const file: File = event.target.files[0];
      if (file) {
          this.selectedFile = file;
          console.log('Archivo seleccionado:', file.name);
      }
  }
}
