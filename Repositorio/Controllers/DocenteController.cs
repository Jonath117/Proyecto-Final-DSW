using Microsoft.AspNetCore.Mvc;
using Notis.Models;
using Notis.Services;
using Notis.DTO;

[ApiController]
[Route("[controller]")]
public class DocenteController
{
    private readonly IDocenteService _docenteService;
    public DocenteController(IDocenteService docenteService)
    {
        _docenteService = docenteService;
    }

    [HttpPost("subirArchivo")]
    public Documento SubirArchivo([FromBody] DocumentoDTO documentDTO)
    {
        System.Console.WriteLine("El archivo se ha almacenado correctamente!");
        return _docenteService.EnviarDocumento(documentDTO);
    }
}