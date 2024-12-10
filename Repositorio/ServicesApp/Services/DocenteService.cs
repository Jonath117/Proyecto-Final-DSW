using Notis.Models;
namespace Notis.Services;

public class DocenteService : IDocenteService
{
    private IDocumentoService _documentoService;
    public DocenteService(IDocumentoService documentoService)
    {
        _documentoService = documentoService;
    }
    public Documento EnviarDocumento(Documento dp)
    {
        return _documentoService.CrearDocumento(dp);
    }

    Documento IDocenteService.EnviarDocumento(DocumentoDTO dp)
    {
        throw new NotImplementedException();
    }
}