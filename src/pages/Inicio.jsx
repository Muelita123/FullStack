import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import productos from '../data/productos.js'

export default function Inicio() {
  const destacados = productos.slice(0, 3)

  return (
    <>
      <section className="hero">
        <h1>Bienvenido a MiTienda</h1>
        <p>Productos de calidad, directo del productor a tu casa.</p>
        <Link to="/catalogo" className="boton">
          Ver catálogo
        </Link>
      </section>
      <section aria-labelledby="destacados-titulo">
        <h2 id="destacados-titulo">Productos destacados</h2>
        <div className="rejilla">
          {destacados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </>
  )
}
