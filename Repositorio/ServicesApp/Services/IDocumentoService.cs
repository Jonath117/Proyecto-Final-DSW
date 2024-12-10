using Notis.Models;
using Notis.DTO;
namespace Notis.Services;

public interface IDocumentoService
    {
    Documento CrearDocumento(DocumentoDTO dp);
    Documento CrearDocumento(Documento dp);
    IEnumerable<Documento> ListarDocumentos();

    IEnumerable<Documento> ObtenerTodos(); // Para búsqueda
    /*
    bool CambiarEstadoDocumento(int id, string nuevoEstado);
    Documento CrearDocumento(Documento dp);
    */
}