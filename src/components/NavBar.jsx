import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '#productos', label: 'Productos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  // Cierra el menú al hacer clic fuera o al presionar Escape
  useEffect(() => {
    function handleClickOutside(event) {
      if (open && navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    function handleEscape(event) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  // Evita que el fondo haga scroll mientras el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav className="navbar salvia-navbar py-3" ref={navRef}>
      <div className="container-xl-custom navbar-inner">
        <a className="salvia-brand" href="#inicio" onClick={() => setOpen(false)}>
          <span className="brand-mark">Rx</span>
          Salvia Farmacéutica
        </a>

        <button
          type="button"
          className={`salvia-toggler${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="salvia-menu"
          aria-label={open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="salvia-toggler-bar" />
          <span className="salvia-toggler-bar" />
          <span className="salvia-toggler-bar" />
        </button>

        <div id="salvia-menu" className={`salvia-menu${open ? ' is-open' : ''}`}>
          <ul className="salvia-menu-list">
            {links.map((link) => (
              <li className="salvia-menu-item" key={link.href}>
                <a
                  className="salvia-nav-link"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="salvia-menu-item salvia-menu-item-cta">
              <a
                href="#contacto"
                className="btn btn-salvia-primary btn-sm d-block text-center"
                onClick={() => setOpen(false)}
              >
                Hablar con un farmacéutico
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
