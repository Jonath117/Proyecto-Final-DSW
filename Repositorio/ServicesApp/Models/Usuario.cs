namespace Repositorio.Models;

public class Usuario
{
    public int IdUsuario { get; set; }
    public string Correo { get; set; } = null!;
    public string Contraseña { get; set; } = null!;
    public string Rol { get; set; } = null!;
    
}