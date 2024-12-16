import { Component, OnInit } from '@angular/core';
import { FiltroService } from '../../services/busqueda.service';
import { ProyectoService } from 'src/services/proyecto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda-avanzada',
  templateUrl: './busqueda-avanzada.component.html',
  styleUrls: ['./busqueda-avanzada.component.css'],
})
export class BusquedaAvanzadaComponent implements OnInit {
  // Filtros
  terminoBusqueda: string = '';
  filtros: any = {
    estado: 'Activo', // Por defecto "Activo"
    idAreas: [], // IDs de las áreas seleccionadas
    nombreAutor: '', // Nombre del autor
  };
  areasConocimiento: any[] = [];
  // Resultados de la búsqueda
  resultados: any[] = [];

  constructor(
    //private areasConocimientoService: AreasConocimientoService,
    private filtroService: FiltroService,
    private proyectoService: ProyectoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // Leer el término de búsqueda desde los parámetros de consulta
    this.route.queryParams.subscribe((params) => {
      this.terminoBusqueda = params['termino'] || ''; // Obtén el término de búsqueda
      if (this.terminoBusqueda) {
        this.buscarProyectosHome();
      }
    });
    // Cargar áreas de conocimiento al inicializar el componente
    /*this.areasConocimientoService.obtenerTodas().subscribe({
      next: (data) => {
        this.areasConocimiento = data;
      },
      error: (err) => console.error('Error al cargar áreas de conocimiento:', err),
    });
    */
  }

  buscarProyectosFiltro(): void {
    const filtroDTO = this.prepararFiltroDTO(); // Preparar el DTO

    this.filtroService.buscarDocumentos(filtroDTO).subscribe({
      next: (data) => {
        console.log('Resultados de búsqueda:', data);
        this.resultados = data;
      },
      error: (err) => console.error('Error en la búsqueda:', err),
    });
  }

  prepararFiltroDTO(): any {
    // Mapea los datos del formulario a las propiedades del ProyectoFiltroDTO
    return {
      Estado: this.filtros.estado,
      IDAreas: this.filtros.idAreas.length ? this.filtros.idAreas : null,
      IDConceptos: this.filtros.idConceptos.length ? this.filtros.idConceptos : null,
      FechaInicio: this.filtros.rangoFechas?.desde || null,
      FechaFin: this.filtros.rangoFechas?.hasta || null,
      NombreAutor: this.filtros.autor || null,
    };
  }

  // Método para realizar la búsqueda con los filtros avanzados

  buscarProyectos(): void {
    const termino = this.filtros.palabrasClave.trim(); // Obtener y limpiar el término de búsqueda
    if (termino) {
      this.proyectoService.buscarProyectos(termino).subscribe({
        next: (data) => {
          console.log('Resultados de búsqueda:', data);
          this.resultados = data;
        },
        error: (err) => console.error('Error en la búsqueda:', err),
      });
    } else {
      this.resultados = []
      console.warn('El campo de búsqueda está vacío');
    }
  }

  buscarProyectosHome(): void {
    this.proyectoService.buscarProyectos(this.terminoBusqueda).subscribe({
      next: (data) => {
        this.resultados = data;
      },
      error: (err) => console.error('Error al buscar proyectos:', err),
    });
  }
}
