using Microsoft.AspNetCore.Mvc;
using Notis.Services;

namespace Notis.Controllers
{
    [ApiController]
    [Route("api/busqueda")]
    public class BusquedaController : ControllerBase
    {
        private readonly IBusquedaService _busquedaService;

        public BusquedaController(IBusquedaService busquedaService)
        {
            _busquedaService = busquedaService;
        }

        [HttpGet]
        public IActionResult BuscarDocumentos([FromQuery] string? titulo, [FromQuery] string? autor, [FromQuery] string? categoria, [FromQuery] string? tipoDocumento, [FromQuery] string? palabrasClave)
        {
            var resultados = _busquedaService.BuscarDocumentos(titulo, autor, categoria, tipoDocumento, palabrasClave);
            return Ok(resultados);
        }
    }
}
