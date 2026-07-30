import RevealStagger from './RevealStagger.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="salvia-footer">
      <div className="container-xl-custom">
        <RevealStagger as="div" className="row g-4" y={20} stagger={0.1}>
          <div className="col-12 col-md-4">
            <div className="salvia-brand mb-2" style={{ color: 'var(--color-paper)' }}>
              <span className="brand-mark">Rx</span>
              Salvia Farmacéutica
            </div>
            <p style={{ fontSize: '0.9rem', maxWidth: '280px' }}>
              Laboratorio farmacéutico dedicado a la elaboración y distribución
              de medicamentos de uso común, con control de calidad en cada
              lote.
            </p>
          </div>

          <div className="col-6 col-md-2">
            <h4>Navegación</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="#productos">Productos</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#testimonios">Testimonios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h4>Líneas</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="#productos">Analgésicos</a></li>
              <li><a href="#productos">Respiratorio</a></li>
              <li><a href="#productos">Vitaminas</a></li>
              <li><a href="#productos">Pediátrico</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <h4>Contacto</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>+1 (809) 555-0134</li>
              <li>contacto@salviafarmaceutica.com</li>
              <li>Santiago de los Caballeros, RD</li>
            </ul>
          </div>
        </RevealStagger>

        <div className="footer-bottom">
          <span>© {year} Salvia Farmacéutica. Todos los derechos reservados.</span>
          <span>Registro sanitario vigente · Uso bajo supervisión profesional</span>
        </div>
      </div>
    </footer>
  )
}
