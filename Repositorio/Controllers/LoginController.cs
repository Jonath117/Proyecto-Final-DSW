using Microsoft.AspNetCore.Mvc;
using Notis.Models;
using Notis.Services;

[ApiController]
[Route("api/login")]
public class LoginController : ControllerBase
{
    private readonly ILoginService _loginService;

    public LoginController(ILoginService loginService)
    {
        _loginService = loginService;
    }

    [HttpPost]
    public IActionResult IniciarSesion([FromBody] LoginRequest loginRequest)
    {
        if (string.IsNullOrEmpty(loginRequest.Correo) || string.IsNullOrEmpty(loginRequest.Password))
        {
            return BadRequest("Correo y Password son requeridos.");
        }

        var usuario = _loginService.ObtenerUsuario(loginRequest.Correo, loginRequest.Password);

        if (usuario != null)
        {
            return Ok(new
            {
                Rol = usuario.Rol, // Asegúrate de que esto esté en la respuesta
                Nombre = usuario.Nombre,
                Apellido = usuario.Apellido
            });
        }

        return Unauthorized("Credenciales inválidas");
    }

}
