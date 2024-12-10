using System;
using System.Collections.Generic;
using System.Linq;
using Notis.Models;

namespace Notis.Services;

    public class BusquedaService : IBusquedaService
    {
         private readonly IDocumentoService _documentoService;

        public BusquedaService(IDocumentoService documentoService)
        {
            _documentoService = documentoService;
        }


    public IEnumerable<Documento> BuscarDocumentos(string? titulo, string? autor, string? categoria, string? tipoDocumento, string? palabrasClave)
        {
            var documentos = _documentoService.ObtenerTodos();
            var query = documentos.AsEnumerable();

            if (!string.IsNullOrEmpty(titulo))
                query = query.Where(d => d.Titulo.Contains(titulo, StringComparison.OrdinalIgnoreCase));

            if (!string.IsNullOrEmpty(autor))
                query = query.Where(d => d.Autores.Contains(autor, StringComparison.OrdinalIgnoreCase));

            if (!string.IsNullOrEmpty(categoria))
                query = query.Where(d => d.Categoria.Contains(categoria, StringComparison.OrdinalIgnoreCase));

            if (!string.IsNullOrEmpty(tipoDocumento))
                query = query.Where(d => d.TipoDocumento.Contains(tipoDocumento, StringComparison.OrdinalIgnoreCase));

            if (!string.IsNullOrEmpty(palabrasClave))
                query = query.Where(d => d.PalabrasClave.Contains(palabrasClave, StringComparison.OrdinalIgnoreCase));

            return query.ToList();
        }
}

