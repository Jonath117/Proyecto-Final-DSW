using Notis.Models;
namespace Notis.Services;

public interface IExaminadorService
{
   IEnumerable<DocumentoPendiente> ObtenerDocumentosPendientes();
    void CambiarEstadoDocumento(int id, string estado, string? comentarios);
}