import { useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../lib/gsap'

export default function Hero() {
  const sectionRef = useRef(null)
  const eyebrowRef = useRef(null)
  const titleRef = useRef(null)
  const ledeRef = useRef(null)
  const ctaRef = useRef(null)
  const statsRef = useRef(null)
  const visualRef = useRef(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      // Entrada inicial del Hero (una sola vez al cargar, no atada al scroll)
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
      tl.fromTo(eyebrowRef.current, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0 })
        .fromTo(titleRef.current, { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0 }, '-=0.5')
        .fromTo(ledeRef.current, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0 }, '-=0.5')
        .fromTo(ctaRef.current, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0 }, '-=0.45')
        .fromTo(statsRef.current, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0 }, '-=0.45')
        .fromTo(
          visualRef.current,
          { autoAlpha: 0, scale: 0.92 },
          { autoAlpha: 1, scale: 1, duration: 1 },
          '-=0.7',
        )

      // Parallax sutil del frasco: al bajar se desplaza, al subir vuelve solo
      // (queda ligado directamente a la posición del scroll con "scrub")
      gsap.to(visualRef.current, {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="inicio" className="hero-section" ref={sectionRef}>
      <div className="container-xl-custom">
        <div className="row align-items-center gy-5">
          <div className="col-12 col-lg-6">
            <span className="eyebrow mb-3" ref={eyebrowRef}>Rx · Laboratorio farmacéutico</span>
            <h1 className="hero-title mt-3 mb-3" ref={titleRef}>
              Medicamentos en los que confía tu familia
            </h1>
            <p className="hero-lede mb-4" ref={ledeRef}>
              En Salvia elaboramos y distribuimos medicamentos de uso común con
              control de calidad en cada lote y acompañamiento de farmacéuticos
              reales, para que cada tratamiento llegue completo, a tiempo y bien
              explicado.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mb-4" ref={ctaRef}>
              <a href="#productos" className="btn btn-salvia-primary">
                Ver catálogo
              </a>
              <a href="#contacto" className="btn btn-salvia-outline">
                Hablar con un farmacéutico
              </a>
            </div>

            <div className="hero-stats" ref={statsRef}>
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
            <div className="hero-visual" ref={visualRef}>
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
