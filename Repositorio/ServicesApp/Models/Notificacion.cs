namespace Notis.Models;

public class Notificacion
{
    public int Id { get; set;}
    public DateTime FechaActual;
    public string? Titulo;
    public string? Descripcion;
    public int IdDestinatario;

    public Notificacion(int id, DateTime fechAc, string title, string descrip, int idDest)
    {
        Id = id;
        FechaActual = fechAc;
        Titulo = title;
        Descripcion = descrip;
        IdDestinatario = idDest;
    }
}