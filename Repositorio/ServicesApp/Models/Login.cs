namespace Notis.Models;

public class Login
{
    public string Correo { get; set; }
    public string Password { get; set; }
    public string Rol { get; set; }
    public string Nombre { get; set; }
    public string Apellido { get; set; }

    public Login(string correo, string password, string rol, string nombre, string apellido)
    {
        Correo = correo;
        Password = password;
        Rol = rol;
        Nombre = nombre;
        Apellido = apellido;
    }
}
