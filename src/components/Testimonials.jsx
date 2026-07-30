import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, A11y } from 'swiper/modules'
import Reveal from './Reveal.jsx'

import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    quote:
      'Llevamos 6 años comprando la línea respiratoria de Salvia para nuestra farmacia. Nunca hemos tenido un problema de calidad o de desabasto.',
    name: 'Yolanda Reyes',
    role: 'Farmacia San Rafael',
  },
  {
    quote:
      'Cuando tuve dudas sobre la dosis pediátrica para mi hijo, me atendió un farmacéutico real por teléfono, no un bot. Eso genera confianza.',
    name: 'Miguel Ángel Ortiz',
    role: 'Cliente final',
  },
  {
    quote:
      'La trazabilidad por lote nos facilita muchísimo las auditorías. Salvia siempre entrega la documentación completa sin que la pidamos dos veces.',
    name: 'Carla Fernández',
    role: 'Directora técnica, Distribuidora Meridiano',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" style={{ background: 'var(--color-paper-alt)' }}>
      <div className="container-xl-custom">
        <Reveal as="div" className="section-heading mx-auto text-center mb-4">
          <span className="eyebrow mb-3">Testimonios</span>
          <h2 className="mt-3 mb-2" style={{ fontSize: '2rem' }}>
            Lo que dicen quienes ya confían en nosotros
          </h2>
        </Reveal>

        <Reveal as="div" delay={0.15}>
          <Swiper
            modules={[Pagination, Autoplay, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides
            pagination={{ clickable: true }}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2, centeredSlides: false },
              992: { slidesPerView: 3, centeredSlides: false },
            }}
            a11y={{ prevSlideMessage: 'Testimonio anterior', nextSlideMessage: 'Siguiente testimonio' }}
            className="pb-5"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="product-slide">
                <div className="testimonial-card">
                  <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                  <div className="testimonial-person">
                    <div className="testimonial-avatar">
                      {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  )
}
