import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Respeta la preferencia de "reducir movimiento" del sistema operativo:
 * si está activa, ninguno de los componentes de animación (Reveal,
 * RevealStagger, Hero) debe animar con gsap, solo mostrar el contenido.
 */
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export { gsap, ScrollTrigger }
