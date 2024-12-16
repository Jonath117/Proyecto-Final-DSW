import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { TiposTrabajoService } from 'src/services/tipos-trabajo.service';

interface Participante
{
  nombreCompleto: string,
  carrera: string
}

@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})

export class CrearProyectoComponent implements OnInit {
  // Define el objeto del proyecto con el tipo correcto para `participantes`
  proyecto: {
    titulo: string;
    resumen: string;
    enlaceRepositorio: string;
    idTipoTrabajo: number | null;
    estado: string;
    idUsuario: number | null;
    participantes: Participante[]; // Cambia a un arreglo del tipo `Participante`
  } = {
    titulo: '',
    resumen: '',
    enlaceRepositorio: '',
    idTipoTrabajo: null,
    estado: 'Activo',
    idUsuario: null,
    participantes: [], // Inicializa como un arreglo vacío
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
    // Agrega un participante con el tipo correcto
    this.proyecto.participantes.push({ nombreCompleto: nombre, carrera: carrera });
  }

  crearProyecto(): void {
    if (!this.archivo) {
      alert('Por favor, selecciona un archivo.');
      return;
    }

    this.proyectoService.crearProyectoConArchivo(this.proyecto, this.archivo).subscribe({
      next: (response) => {
        console.log('Proyecto creado exitosamente:', response);
        alert('Proyecto creado exitosamente.');
        this.resetFormulario();
      },
      error: (err) => {
        console.error('Error al crear proyecto:', err);
        alert('Ocurrió un error al crear el proyecto.');
      },
    });
  }
  
  eliminarUltimoParticipante(): void {
    if (this.proyecto.participantes.length === 0) {
      alert('No hay participantes para eliminar.');
      return;
    }
  
    if (this.proyecto.participantes.length === 1) {
      alert('Debe haber al menos un participante.');
      return;
    }
  
    this.proyecto.participantes.pop();
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
    };
    this.archivo = null!;
  }
}