import { useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import productos from '../data/productos.js'

export default function Catalogo() {
  const [busqueda, setBusqueda] = useState('')
  const filtrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.trim().toLowerCase()),
  )

  return (
    <section aria-labelledby="catalogo-titulo">
      <h1 id="catalogo-titulo" className="pagina-titulo">
        Catálogo
      </h1>
      <p className="pagina-descripcion">
        Explora nuestros productos y encuentra tu próximo favorito.
      </p>
      <label className="buscador">
        Buscar producto
        <input
          type="search"
          placeholder="Ejemplo: taza"
          value={busqueda}
          onChange={(evento) => setBusqueda(evento.target.value)}
        />
      </label>
      <p aria-live="polite">
        {filtrados.length} producto(s) encontrado(s)
      </p>
      {filtrados.length > 0 ? (
        <div className="rejilla">
          {filtrados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      ) : (
        <p role="status">No hay productos que coincidan con tu búsqueda.</p>
      )}
    </section>
  )
}
