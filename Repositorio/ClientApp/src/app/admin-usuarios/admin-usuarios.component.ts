import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {
  usuarios: any[] = []; // Lista de usuarios
  nuevoUsuario = { nombreCompleto: '', correo: '', rol: '', contrasena: '' }; // Formulario para agregar usuarios
  roles: string[] = ['Administrador', 'Revisor', 'Docente', 'Usuario']; // Roles disponibles

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe({
      next: (data) => (this.usuarios = data),
      error: (err) => console.error('Error al obtener usuarios:', err),
    });
  }

  agregarUsuario(): void {
    this.usuarioService.agregarUsuario(this.nuevoUsuario).subscribe({
      next: () => {
        this.obtenerUsuarios();
        this.nuevoUsuario = { nombreCompleto: '', correo: '', rol: '', contrasena: '' };
      },
      error: (err) => console.error('Error al agregar usuario:', err),
    });
  }

  eliminarUsuario(id: number): void {
    this.usuarioService.eliminarUsuario(id).subscribe({
      next: () => {
        console.log(`Usuario con ID ${id} eliminado.`);
        this.obtenerUsuarios();
      }, 
      error: (err) => console.error('Error al eliminar usuario:', err),
    });
  }

  actualizarUsuario(usuario: any): void {
    this.usuarioService.actualizarUsuario(usuario).subscribe({
      next: () => this.obtenerUsuarios(),
      error: (err) => console.error('Error al actualizar usuario:', err),
    });
  }
}
