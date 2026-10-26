import { AtSign, Code2, MessageSquare } from 'lucide-react'
import './Footer.css'

const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Historia', href: '#historia' },
  { label: 'Juegos', href: '#juegos' },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/', icon: Code2 },
  { label: 'X / Twitter', href: 'https://x.com/', icon: AtSign },
  { label: 'Discord', href: 'https://discord.com/', icon: MessageSquare },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <a className="footer-logo" href="#inicio" aria-label="Kaos, volver al inicio">
          KAOS<span aria-hidden="true">.</span>
        </a>

        <nav className="footer-navigation" aria-label="Navegación del pie de página">
          {footerLinks.map(({ label, href }) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="footer-socials" aria-label="Redes y comunidad">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              aria-label={label}
              href={href}
              key={label}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Kaos Team &amp; Labs. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
