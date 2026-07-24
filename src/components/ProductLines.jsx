import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const products = [
  {
    code: 'RX · ANALGÉSICOS',
    icon: '💊',
    title: 'Línea de dolor y fiebre',
    desc: 'Analgésicos y antipiréticos de uso diario, en tabletas, jarabe y sobres, para toda la familia.',
  },
  {
    code: 'RX · RESPIRATORIO',
    icon: '🫁',
    title: 'Línea respiratoria',
    desc: 'Jarabes, expectorantes y antihistamínicos formulados para gripes y alergias estacionales.',
  },
  {
    code: 'RX · VITAMINAS',
    icon: '🌿',
    title: 'Vitaminas y suplementos',
    desc: 'Multivitamínicos, hierro y complejo B para acompañar el bienestar diario, con y sin receta.',
  },
  {
    code: 'RX · DIGESTIVO',
    icon: '⚗️',
    title: 'Línea digestiva',
    desc: 'Antiácidos, probióticos y soluciones de rehidratación oral para el cuidado del sistema digestivo.',
  },
  {
    code: 'RX · DERMATOLÓGICO',
    icon: '🧴',
    title: 'Cuidado dermatológico',
    desc: 'Cremas y ungüentos para el cuidado de la piel, formulados junto a dermatólogos consultores.',
  },
  {
    code: 'RX · PEDIÁTRICO',
    icon: '🧸',
    title: 'Línea pediátrica',
    desc: 'Presentaciones y dosis pensadas para niños, con sabores suaves y empaques de fácil dosificación.',
  },
]

export default function ProductLines() {
  return (
    <section id="productos">
      <div className="container-xl-custom">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
          <div className="section-heading">
            <span className="eyebrow mb-3">Catálogo</span>
            <h2 className="mt-3 mb-2" style={{ fontSize: '2rem' }}>
              Líneas de medicamentos
            </h2>
            <p>
              Seis líneas terapéuticas producidas bajo el mismo estándar de
              calidad, disponibles en farmacias aliadas de todo el país.
            </p>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1.15}
          navigation={{
            nextEl: '.product-next',
            prevEl: '.product-prev',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            576: { slidesPerView: 1.6 },
            768: { slidesPerView: 2.2 },
            992: { slidesPerView: 3.2 },
          }}
          a11y={{ prevSlideMessage: 'Línea anterior', nextSlideMessage: 'Siguiente línea' }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.title} className="product-slide">
              <article className="rx-card">
                <span className="rx-code">{item.code}</span>
                <div className="rx-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="d-flex gap-2 mt-2">
          <button
            className="swiper-button-prev salvia-nav-btn product-prev position-static"
            aria-label="Producto anterior"
          />
          <button
            className="swiper-button-next salvia-nav-btn product-next position-static"
            aria-label="Producto siguiente"
          />
        </div>
      </div>
    </section>
  )
}
