import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { TiposTrabajoService } from 'src/services/tipos-trabajo.service';

@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent implements OnInit {
  documento = {
    titulo: '',
    resumen: '',
    link: '',
    idTipoTrabajo: null, // Reemplazar con el ID del tipo de documento
  };
  tiposTrabajo: any[] = []
  archivo!: File; // Archivo seleccionado por el usuario

  constructor(
    private proyectoService: ProyectoService,
    private tiposTrabajoService: TiposTrabajoService,
  ) {}

  ngOnInit(): void {
    // Cargar tipos de trabajo al inicializar el componente
    this.tiposTrabajoService.obtenerTiposTrabajo().subscribe({
      next: (data) => {
        this.tiposTrabajo = data;
        console.log(this.tiposTrabajo);
      },
      error: (err) => console.error('Error al cargar tipos de trabajo:', err),
    });
  }

  // Manejar la selección de archivo
  seleccionarArchivo(event: any): void {
    if (event.target.files.length > 0) {
      this.archivo = event.target.files[0];
    }
  }

  // Subir el documento
  subirDocumento(): void {
    if (!this.archivo) {
      alert('Por favor, selecciona un archivo.');
      return;
    }

    this.proyectoService.subirDocumentoConArchivo(this.documento, this.archivo).subscribe({
      next: (response) => {
        console.log('Documento subido exitosamente:', response);
        alert('Documento subido exitosamente.');
      },
      error: (err) => {
        console.error('Error al subir el documento:', err);
        alert('Ocurrió un error al subir el documento.');
      },
    });
  }
/*
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
  }*/
}
