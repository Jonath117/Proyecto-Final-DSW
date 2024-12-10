namespace Notis.Models;

public class DocumentoPendiente
    {
        public int? Id { get; set; }
        public string? Titulo { get; set; }
        public string? Autor { get; set; }
        public DateTime FechaSubida { get; set; }
        public string? Estado { get; set; } // Pendiente, Aprobado, Rechazado
    }