import { Link } from 'react-router-dom'

export default function NoEncontrada() {
  return (
    <section aria-labelledby="no-encontrada-titulo">
      <h1 id="no-encontrada-titulo" className="pagina-titulo">
        404 · Página no encontrada
      </h1>
      <p className="pagina-descripcion">La dirección que buscas no existe.</p>
      <Link to="/" className="boton boton--primario">
        Volver al inicio
      </Link>
    </section>
  )
}
