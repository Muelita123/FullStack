import { useState } from 'react'

export default function Contacto() {
  const [datos, setDatos] = useState({ nombre: '', email: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  function cambiar(evento) {
    const { name, value } = evento.target
    setDatos((datosActuales) => ({ ...datosActuales, [name]: value }))
    setEnviado(false)
  }

  function enviar(evento) {
    evento.preventDefault()
    console.log('Mensaje recibido:', datos)
    setEnviado(true)
  }

  return (
    <section aria-labelledby="contacto-titulo">
      <h1 id="contacto-titulo" className="pagina-titulo">
        Contáctanos
      </h1>
      <p className="pagina-descripcion">
        Completa el formulario y nos pondremos en contacto contigo.
      </p>
      <form className="formulario" onSubmit={enviar}>
        <label>
          Tu nombre
          <input
            name="nombre"
            autoComplete="name"
            placeholder="Escribe tu nombre"
            value={datos.nombre}
            onChange={cambiar}
            required
          />
        </label>
        <label>
          Tu correo
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nombre@ejemplo.com"
            value={datos.email}
            onChange={cambiar}
            required
          />
        </label>
        <label>
          Mensaje
          <textarea
            name="mensaje"
            rows="5"
            placeholder="¿En qué te ayudamos?"
            value={datos.mensaje}
            onChange={cambiar}
            required
          />
        </label>
        <button type="submit">Enviar mensaje</button>
      </form>
      {enviado && (
        <p className="mensaje-ok" role="status">
          ¡Gracias! Te responderemos pronto.
        </p>
      )}
    </section>
  )
}
