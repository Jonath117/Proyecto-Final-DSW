namespace Notis.Models;

public class Administrador
{
    public int ID {get;set;}
    public string Nombre {get;set;}
    public string Apellidos {get;set;}

    public Administrador(int id, string nombre, string apellidos)
    {
        ID = id;
        Nombre = nombre;
        Apellidos = apellidos;
    }
    
    
}