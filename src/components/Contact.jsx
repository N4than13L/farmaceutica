import { useState } from 'react'

export default function Contact() {
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se integraría el envío real (API, servicio de correo, etc.)
    setEnviado(true)
  }

  return (
    <section id="contacto">
      <div className="container-xl-custom">
        <div className="section-heading mx-auto text-center mb-4">
          <span className="eyebrow mb-3">Contacto</span>
          <h2 className="mt-3 mb-2" style={{ fontSize: '2rem' }}>
            Escríbenos, un farmacéutico te responde
          </h2>
        </div>

        <div className="contact-panel">
          <div className="row g-0">
            <div className="col-12 col-lg-5 contact-info-col">
              <h3>Salvia Farmacéutica</h3>
              <p>
                Atendemos consultas de farmacias, distribuidores y pacientes
                sobre disponibilidad, dosis y conservación de nuestros
                medicamentos.
              </p>

              <div className="contact-info-item">
                <span className="icon">Tel</span>
                <span>+1 (809) 555-0134</span>
              </div>
              <div className="contact-info-item">
                <span className="icon">Mail</span>
                <span>contacto@salviafarmaceutica.com</span>
              </div>
              <div className="contact-info-item">
                <span className="icon">Dir</span>
                <span>Zona Industrial, Santiago de los Caballeros, RD</span>
              </div>
              <div className="contact-info-item">
                <span className="icon">Hrs</span>
                <span>Lunes a sábado, 8:00 a.m. – 6:00 p.m.</span>
              </div>
            </div>

            <div className="col-12 col-lg-7 p-4 p-md-5">
              {enviado ? (
                <div className="d-flex flex-column align-items-start gap-2 h-100 justify-content-center">
                  <span className="eyebrow">Mensaje enviado</span>
                  <h3 className="mb-1">Recibimos tu consulta</h3>
                  <p style={{ color: 'rgba(20,36,31,0.72)' }}>
                    Un farmacéutico del equipo de Salvia te contactará en menos
                    de 24 horas hábiles.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="salvia-label" htmlFor="nombre">
                        Nombre completo
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        required
                        className="form-control salvia-input"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="salvia-label" htmlFor="email">
                        Correo electrónico
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="form-control salvia-input"
                        placeholder="tucorreo@ejemplo.com"
                      />
                    </div>
                    <div className="col-12">
                      <label className="salvia-label" htmlFor="perfil">
                        Eres...
                      </label>
                      <select id="perfil" className="form-select salvia-input" defaultValue="">
                        <option value="" disabled>
                          Selecciona una opción
                        </option>
                        <option value="farmacia">Farmacia</option>
                        <option value="distribuidor">Distribuidor</option>
                        <option value="paciente">Paciente</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="salvia-label" htmlFor="mensaje">
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        required
                        rows={4}
                        className="form-control salvia-input"
                        placeholder="Cuéntanos qué necesitas"
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-salvia-primary w-100 w-md-auto">
                        Enviar mensaje
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
