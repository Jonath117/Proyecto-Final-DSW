namespace Notis.DTO;

public class CambiarEstadoDTO
{
    public int Id { get; set; }
    public string Estado { get; set; } // Aprobado o Rechazado
    public string? Comentarios { get; set; }
}