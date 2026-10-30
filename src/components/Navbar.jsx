import { NavLink } from 'react-router-dom'

const enlaces = [
  { to: '/', texto: 'Inicio', exacto: true },
  { to: '/servicios', texto: 'Servicios' },
  { to: '/catalogo', texto: 'Catálogo' },
  { to: '/contacto', texto: 'Contacto' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__interior contenedor">
        <NavLink className="logo" to="/" aria-label="MiTienda, ir al inicio">
          MiTienda
        </NavLink>
        <nav aria-label="Navegación principal">
          {enlaces.map(({ to, texto, exacto }) => (
            <NavLink
              key={to}
              to={to}
              end={exacto}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {texto}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
