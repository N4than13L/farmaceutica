export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container-xl-custom">
        <div className="row align-items-center gy-5">
          <div className="col-12 col-lg-6">
            <span className="eyebrow mb-3">Rx · Laboratorio farmacéutico</span>
            <h1 className="hero-title mt-3 mb-3">
              Medicamentos en los que confía tu familia
            </h1>
            <p className="hero-lede mb-4">
              En Salvia elaboramos y distribuimos medicamentos de uso común con
              control de calidad en cada lote y acompañamiento de farmacéuticos
              reales, para que cada tratamiento llegue completo, a tiempo y bien
              explicado.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
              <a href="#productos" className="btn btn-salvia-primary">
                Ver catálogo
              </a>
              <a href="#contacto" className="btn btn-salvia-outline">
                Hablar con un farmacéutico
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-num">18 años</div>
                <div className="hero-stat-label">elaborando y distribuyendo medicamentos</div>
              </div>
              <div>
                <div className="hero-stat-num">120+</div>
                <div className="hero-stat-label">farmacias aliadas en todo el país</div>
              </div>
              <div>
                <div className="hero-stat-num">100%</div>
                <div className="hero-stat-label">lotes con control de calidad certificado</div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="hero-visual">
              <div className="bottle-wrap">
                <svg
                  className="bottle-svg"
                  viewBox="0 0 320 380"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Ilustración de un frasco de vidrio ámbar con etiqueta de Salvia Farmacéutica"
                >
                  <defs>
                    <linearGradient id="amberGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#e59a3d" />
                      <stop offset="100%" stopColor="#b06a1a" />
                    </linearGradient>
                  </defs>
                  {/* tapa */}
                  <rect x="128" y="24" width="64" height="34" rx="6" fill="#123c39" />
                  <rect x="122" y="52" width="76" height="16" rx="4" fill="#0e2e2b" />
                  {/* cuello */}
                  <path d="M136 68 L184 68 L192 108 L128 108 Z" fill="url(#amberGrad)" />
                  {/* cuerpo del frasco */}
                  <path
                    d="M128 108
                       C104 118, 92 140, 92 172
                       L92 320
                       C92 344, 112 360, 160 360
                       C208 360, 228 344, 228 320
                       L228 172
                       C228 140, 216 118, 192 108
                       Z"
                    fill="url(#amberGrad)"
                  />
                  {/* brillo del vidrio */}
                  <path
                    d="M112 150 C104 190, 104 260, 112 310"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* etiqueta central */}
                  <rect x="112" y="190" width="96" height="86" rx="8" fill="#eff3ed" />
                  <line x1="128" y1="210" x2="192" y2="210" stroke="#123c39" strokeWidth="3" />
                  <line x1="128" y1="224" x2="184" y2="224" stroke="#6e8f79" strokeWidth="3" />
                  <line x1="128" y1="238" x2="188" y2="238" stroke="#6e8f79" strokeWidth="3" />
                  <text
                    x="160"
                    y="262"
                    textAnchor="middle"
                    fontFamily="IBM Plex Mono, monospace"
                    fontSize="11"
                    fill="#b06a1a"
                  >
                    LOTE 2410-SV
                  </text>
                </svg>

                <div className="floating-label label-top">
                  <strong>Control de calidad</strong>
                  Cada lote se analiza antes de salir del laboratorio.
                </div>
                <div className="floating-label label-bottom">
                  <strong>Farmacéuticos disponibles</strong>
                  Lun–Sáb, 8:00 a.m.–6:00 p.m.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
