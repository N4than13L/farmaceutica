import Reveal from './Reveal.jsx'
import RevealStagger from './RevealStagger.jsx'

const benefits = [
  {
    icon: '🔬',
    title: 'Control de calidad por lote',
    desc: 'Cada lote pasa por análisis fisicoquímico y microbiológico antes de salir del laboratorio.',
  },
  {
    icon: '📋',
    title: 'Registro sanitario vigente',
    desc: 'Todos nuestros productos cuentan con registro sanitario activo y trazabilidad completa.',
  },
  {
    icon: '🚚',
    title: 'Distribución en 24–48h',
    desc: 'Entregamos a farmacias aliadas en toda la región en un plazo máximo de dos días.',
  },
  {
    icon: '👩‍⚕️',
    title: 'Acompañamiento profesional',
    desc: 'Un equipo de farmacéuticos resuelve dudas sobre dosis, interacciones y conservación.',
  },
]

export default function WhyUs() {
  return (
    <section id="nosotros">
      <div className="blister-section py-5 px-3 px-md-5">
        <Reveal
          as="div"
          className="section-heading mx-auto text-center text-lg-start mx-lg-0"
        >
          <span className="eyebrow mb-3">Por qué Salvia</span>
          <h2 className="mt-3 mb-2" style={{ fontSize: '2rem' }}>
            Cada pastilla, con su lugar y su respaldo
          </h2>
          <p>
            Así como un blíster protege cada dosis por separado, nosotros
            respaldamos cada medicamento con procesos que puedes verificar.
          </p>
        </Reveal>

        <RevealStagger as="div" className="row g-3 g-md-4 mt-2">
          {benefits.map((item) => (
            <div className="col-12 col-sm-6 col-lg-3" key={item.title}>
              <div className="blister-cell">
                <div className="pill-dot" aria-hidden="true">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
