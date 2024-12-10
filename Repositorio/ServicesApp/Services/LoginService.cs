using Notis.Models;
namespace Notis.Services;

public class LoginService : ILoginService
{
    private readonly List<Login> _usuarios = new List<Login>
    {
        new Login("docente@gmail.com", "hola", "Docente", "Juan", "Pérez"),
        new Login("examinador@gmail.com", "5678", "Examinador", "María", "González")
    };

    // Obtiene el usuario completo (útil si necesitas más información como Nombre y Apellido)
    public Login? ObtenerUsuario(string correo, string password)
    {
        return _usuarios.FirstOrDefault(u => u.Correo == correo && u.Password == password);
    }

    // Valida usuario y devuelve solo el rol
    public string? ValidarUsuario(string correo, string password)
    {
        Console.WriteLine($"Correo recibido: {correo}");
        Console.WriteLine($"Password recibido: {password}");

        var usuario = _usuarios.FirstOrDefault(u => u.Correo == correo && u.Password == password);
        Console.WriteLine(usuario != null ? "Usuario encontrado" : "Usuario no encontrado o contraseña incorrecta");
        return usuario?.Rol;
    }
}
