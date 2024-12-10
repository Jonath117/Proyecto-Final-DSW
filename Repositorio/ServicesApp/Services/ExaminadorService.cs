using Notis.Models;
using Notis.Services;

public class ExaminadorService : IExaminadorService
{
     private readonly List<DocumentoPendiente> _documentosPendientes;

    public ExaminadorService()
    {
        // Datos simulados
        _documentosPendientes = new List<DocumentoPendiente>
        {
            new DocumentoPendiente { Id = 1, Titulo = "Documento 1", Autor = "Juan Pérez", FechaSubida = DateTime.Now, Estado = "Pendiente" },
            new DocumentoPendiente { Id = 2, Titulo = "Documento 2", Autor = "Ana Gómez", FechaSubida = DateTime.Now.AddDays(-1), Estado = "Pendiente" }
        };
    }

    public IEnumerable<DocumentoPendiente> ObtenerDocumentosPendientes()
    {
        return _documentosPendientes.Where(d => d.Estado == "Pendiente");
    }

    public void CambiarEstadoDocumento(int id, string estado, string? comentarios)
    {
        var documento = _documentosPendientes.FirstOrDefault(d => d.Id == id);
        if (documento != null)
        {
            documento.Estado = estado;
            // Lógica adicional para guardar comentarios o notificar al docente
        }
    }
}