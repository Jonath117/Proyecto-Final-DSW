using Microsoft.AspNetCore.Mvc;
using Notis.Services;
using Notis.DTO;

[ApiController]
[Route("api/examinador")]
public class ExaminadorController : ControllerBase
{
    private readonly IExaminadorService _examinadorService;

    public ExaminadorController(IExaminadorService examinadorService)
    {
        _examinadorService = examinadorService;
    }

    [HttpGet("pendientes")]
    public IActionResult ObtenerDocumentosPendientes()
    {
        var documentos = _examinadorService.ObtenerDocumentosPendientes();
        return Ok(documentos);
    }

    [HttpPost("cambiar-estado")]
    public IActionResult CambiarEstadoDocumento([FromBody] CambiarEstadoDTO dto)
    {
        if (string.IsNullOrEmpty(dto.Estado) || (dto.Estado != "Aprobado" && dto.Estado != "Rechazado"))
        {
            return BadRequest("Estado no válido.");
        }

        _examinadorService.CambiarEstadoDocumento(dto.Id, dto.Estado, dto.Comentarios);
        return Ok(new { Message = "Estado cambiado exitosamente." });
    }
}

