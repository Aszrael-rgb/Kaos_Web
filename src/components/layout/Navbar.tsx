import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const navigationLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Historia', href: '#historia' },
  { label: 'Juegos', href: '#juegos' },
  { label: 'Proyectos', href: '#proyectos' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar glass-panel" aria-label="Navegación principal">
        <a className="navbar-logo" href="#inicio" onClick={closeMenu}>
          KAOS<span aria-hidden="true">.</span>
        </a>

        <button
          className="navbar-menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-links"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div
          className={`navbar-content${isMenuOpen ? ' is-open' : ''}`}
          id="navbar-links"
        >
          <ul className="navbar-links">
            {navigationLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="navbar-cta"
            href="#proyectos"
            onClick={closeMenu}
          >
            Lakra Launcher
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
