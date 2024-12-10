using Notis.Models;
using Notis.Services;
using System.Collections.Generic;

public class DocumentoService : IDocumentoService
{
    private readonly List<Documento> _documentos;

    public DocumentoService()
    {
        _documentos = new List<Documento>
        {
        };
    }

        public Documento CrearDocumento(DocumentoDTO documentoDTO)
        {
            var nuevoDocumento = new Documento
            {
                Id = _documentos.Count + 1,
                Titulo = documentoDTO.Titulo,
                Autores = documentoDTO.Autores,
                Categoria = documentoDTO.Categoria,
                TipoDocumento = documentoDTO.TipoDocumento,
                PalabrasClave = documentoDTO.PalabrasClave,
                FechaPublicacion = documentoDTO.FechaPublicacion,
                Estado = "Pendiente"
            };

            _documentos.Add(nuevoDocumento);
            return nuevoDocumento;
        }

        public Documento CrearDocumento(Documento dp)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Documento> ListarDocumentos()
        {
            return _documentos;
        }

        public IEnumerable<Documento> ObtenerTodos()
        {
            throw new NotImplementedException();
        }
    }
