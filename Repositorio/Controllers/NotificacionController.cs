using Microsoft.AspNetCore.Mvc;
using Notis.Models;
using Notis.Services;

public class NotificacionController: ControllerBase
{
    private readonly INotificacionService _notificacionService;
    public NotificacionController(NotificacionService notiService)
    {
        _notificacionService = notiService;
    }

    [HttpGet("notificacion")]
    public Notificacion getNotiDocumentoAprobado()
    {
        return _notificacionService.DocumentoAprobado();
    }
}