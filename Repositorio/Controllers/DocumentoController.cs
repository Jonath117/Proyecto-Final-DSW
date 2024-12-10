using Microsoft.AspNetCore.Mvc;
using Notis.DTO;
using Notis.Models;
using Notis.Services;

    [ApiController]
    [Route("api/documentos")]
    public class DocumentoController : ControllerBase
    {
        private readonly IDocumentoService _documentoService;

        public DocumentoController(IDocumentoService documentoService)
        {
            _documentoService = documentoService;
        }

        [HttpPost]
        public IActionResult CrearDocumento([FromBody] DocumentoDTO documento)
        {   Console.WriteLine("Solicitud recibida desde angular");
            Console.WriteLine($"Documento recibido: {documento.Titulo}, {documento.Autores}");
            if (documento == null)
            {
                return BadRequest("El documento no puede ser nulo.");
            }
            // Lógica para guardar el documento
            return Ok(new { Message = "Documento creado exitosamente." });
        }

        [HttpGet]
        public IActionResult ListarDocumentos()
        {
            var documentos = _documentoService.ListarDocumentos();
            return Ok(documentos);
        }
    }

