using Notis.DTO;
using Notis.Models;
namespace Notis.Services;

public interface ILoginService
{
    Login? ObtenerUsuario(string correo, string password); // Devuelve el usuario completo
    string? ValidarUsuario(string correo, string password); // Devuelve solo el rol
}