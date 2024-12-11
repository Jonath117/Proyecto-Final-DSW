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

    [HttpPost("subir")]
    public IActionResult CrearDocumentoConArchivo([FromForm] DocumentoDTO documento, IFormFile archivo)
    {
        if (documento == null)
        {
            return BadRequest("El documento no puede ser nulo.");
        }

        if (archivo == null || archivo.Length == 0)
        {
            return BadRequest("El archivo no puede estar vacío.");
        }

        // Guardar el archivo
        var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "uploads");
        Directory.CreateDirectory(uploadsFolder);

        var filePath = Path.Combine(uploadsFolder, archivo.FileName);

        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            archivo.CopyTo(stream);
        }

        Console.WriteLine($"Archivo guardado en: {filePath}");
        Console.WriteLine($"Documento recibido: {documento.Titulo}, {documento.Autores}, {documento.Categoria}, {documento.TipoDocumento}, {documento.PalabrasClave}, {documento.FechaPublicacion}");

        return Ok(new { Message = "Documento y archivo subidos exitosamente." });
    }



    [HttpGet("archivos")]
    public IActionResult ListarArchivos()
    {
        var rutaCarpeta = Path.Combine(Directory.GetCurrentDirectory(), "uploads");
        if (!Directory.Exists(rutaCarpeta))
        {
            return NotFound("No se encontró la carpeta de archivos.");
        }

        var archivos = Directory.GetFiles(rutaCarpeta).Select(Path.GetFileName).ToList();
        return Ok(archivos);
    }
    }

