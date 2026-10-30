const servicios = [
  { titulo: 'Envíos a todo el país', texto: 'Recibe tu pedido en 48 horas.' },
  {
    titulo: 'Atención personalizada',
    texto: 'Te asesoramos para encontrar lo que necesitas.',
  },
  {
    titulo: 'Pago seguro',
    texto: 'Aceptamos tarjetas y billeteras digitales.',
  },
]

export default function Servicios() {
  return (
    <section aria-labelledby="servicios-titulo">
      <h1 id="servicios-titulo" className="pagina-titulo">
        Nuestros servicios
      </h1>
      <p className="pagina-descripcion">
        Queremos que tu experiencia de compra sea sencilla y segura.
      </p>
      <div className="rejilla">
        {servicios.map((servicio) => (
          <article className="tarjeta" key={servicio.titulo}>
            <h2>{servicio.titulo}</h2>
            <p>{servicio.texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
