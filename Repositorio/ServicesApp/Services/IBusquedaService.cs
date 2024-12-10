using Notis.Models;
namespace Notis.Services;

public interface IBusquedaService
{
    public IEnumerable<Documento> BuscarDocumentos(string? titulo, string? autor, string? categoria, string? tipoDocumento, string? palabrasClave);
}