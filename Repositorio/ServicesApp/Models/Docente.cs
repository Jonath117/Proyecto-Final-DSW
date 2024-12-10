namespace Notis.Models;
public class Docente
{
    public int ID;
    public string Nombre;

    public Docente(int id, string nombre)
    {
        ID = id;
        Nombre = nombre;
    }
}