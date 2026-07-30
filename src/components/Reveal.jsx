import { useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../lib/gsap'

/**
 * Envuelve cualquier bloque de contenido y lo anima cuando entra en el
 * viewport al bajar (fade + slide-up). Al subir y pasar de nuevo el punto
 * de inicio, la animación se revierte (toggleActions: reverse), por lo que
 * el efecto funciona tanto bajando como subiendo. No modifica el contenido,
 * solo lo envuelve en el tag indicado por `as`.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  y = 32,
  delay = 0,
  duration = 0.8,
  start = 'top 85%',
  className = '',
  ...rest
}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: 'play none none reverse',
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [y, delay, duration, start])

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
