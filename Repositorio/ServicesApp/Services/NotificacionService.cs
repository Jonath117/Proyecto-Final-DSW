using Notis.Models;
namespace Notis.Services;

public class NotificacionService : INotificacionService
{
    public Notificacion DocumentoAprobado()
    {
        return new Notificacion(1,new DateTime(), "titulo", "descripcion", 1);
    }
}