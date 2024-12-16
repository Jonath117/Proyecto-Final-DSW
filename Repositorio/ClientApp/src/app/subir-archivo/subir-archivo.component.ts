import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';

interface Participante {
  nombreCompleto: string;
  carrera: string;
}

@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css'],
})
export class CrearProyectoComponent implements OnInit {
  proyecto: {
    titulo: string;
    resumen: string;
    enlaceRepositorio: string;
    idTipoTrabajo: number | null;
    estado: string;
    idUsuario: number | null;
    participantes: Participante[];
    documentoPdf: string;
  } = {
    titulo: '',
    resumen: '',
    enlaceRepositorio: '',
    idTipoTrabajo: null,
    estado: 'Activo',
    idUsuario: null,
    participantes: [],
    documentoPdf: '',
  };

  archivo!: File;

  constructor(private proyectoService: ProyectoService) {}

  ngOnInit(): void {
    const idUsuario = localStorage.getItem('idUsuario');
    if (!idUsuario) {
      alert('No se pudo obtener el ID del usuario. Por favor, inicia sesión.');
      return;
    }
    this.proyecto.idUsuario = parseInt(idUsuario, 10);
  }

  seleccionarArchivo(event: any): void {
    if (event.target.files.length > 0) {
      this.archivo = event.target.files[0];
    }
  }

  agregarParticipante(nombre: string, carrera: string): void {
    this.proyecto.participantes.push({ nombreCompleto: nombre, carrera: carrera });
  }

  eliminarUltimoParticipante(): void {
    if (this.proyecto.participantes.length === 0) {
      alert('No hay participantes para eliminar.');
      return;
    }
    this.proyecto.participantes.pop();
  }

  crearProyecto(): void {
    if (!this.archivo) {
      alert('Por favor, selecciona un archivo.');
      return;
    }

    // Primero subimos el archivo
    this.proyectoService.subirArchivo(this.archivo).subscribe({
      next: (response) => {
        this.proyecto.documentoPdf = response.ruta; // Guardamos la ruta del archivo
        this.proyectoService.crearProyecto(this.proyecto).subscribe({
          next: () => {
            console.log('Proyecto creado exitosamente');
            alert('Proyecto creado exitosamente.');
            this.resetFormulario();
          },
          error: (err) => {
            console.error('Error al crear proyecto:', err);
            alert('Ocurrió un error al crear el proyecto.');
          },
        });
      },
      error: (err) => {
        console.error('Error al subir el archivo:', err);
        alert('Ocurrió un error al subir el archivo.');
      },
    });
  }

  resetFormulario(): void {
    this.proyecto = {
      titulo: '',
      resumen: '',
      enlaceRepositorio: '',
      idTipoTrabajo: null,
      estado: 'Activo',
      idUsuario: this.proyecto.idUsuario,
      participantes: [],
      documentoPdf: '',
    };
    this.archivo = null!;
  }
}
