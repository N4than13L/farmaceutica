import { useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../lib/gsap'

/**
 * Igual que Reveal, pero anima en cascada (stagger) los hijos directos del
 * contenedor en vez del bloque completo. Pensado para cuadrículas como los
 * beneficios (blíster) o el footer. También se revierte al subir.
 */
export default function RevealStagger({
  children,
  as: Tag = 'div',
  y = 28,
  stagger = 0.12,
  duration = 0.7,
  start = 'top 85%',
  className = '',
  ...rest
}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return undefined

    const items = Array.from(el.children)
    if (items.length === 0) return undefined

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          stagger,
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
  }, [y, stagger, duration, start])

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
