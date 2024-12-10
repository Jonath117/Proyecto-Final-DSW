namespace Notis.Models;

public class Documento {

    public int Id { get; set; }
    public string Titulo { get; set; }
    public string Autores { get; set; }
    public string Categoria { get; set; }
    public string TipoDocumento { get; set; }
    public string PalabrasClave { get; set; }
    public DateTime FechaPublicacion { get; set; }
    public string Estado { get; set; } 
//comportamiento orientado a persistencia 
//servicios son servicios por que esta orientado a servicios por que es backend 
//olap 
//IDAo accesores a la bases de datos
//dao metodos para las queries, orientado a las bases de datos
//dto

/*
    public Articulo(int id, string titulo, string autores, string categoria, string tipodocumento, string palabrasclaves, DateTime fechapublicacion, string estado)
    {
        Id = id;
        Titulo = titulo;
        Autores = autores;
        Categoria = categoria;
        TipoDocumento = tipodocumento;
        PalabrasClave = palabrasclaves;
        FechaPublicacion = fechapublicacion;
        Estado = estado;
    }
/*
    /*
    public override string ToString()
    {
        return $"{Titulo}, {Autor}, {Categoria}, {Descripcion}, {descrip_Estado}, {Aprobado}";
    }
    */
}