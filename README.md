# Salvia Farmacéutica — Landing Page

Landing page mobile-first para una pequeña farmacéutica, construida con
**React + Vite**, **Bootstrap 5** (base de estilos y grid) y **Swiper.js**
(carruseles de productos y testimonios).

## Requisitos
- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre la URL que muestra la terminal (por defecto http://localhost:5173).

## Build de producción

```bash
npm run build
npm run preview   # para previsualizar el build
```

## Estructura

```
src/
  components/
    NavBar.jsx        Barra de navegación responsive (colapsable en móvil)
    Hero.jsx           Sección principal con ilustración SVG de frasco ámbar
    ProductLines.jsx    Carrusel Swiper con las líneas de medicamentos
    WhyUs.jsx           Cuadrícula de beneficios estilo "blíster"
    Testimonials.jsx    Carrusel Swiper de testimonios (con autoplay)
    Contact.jsx         Formulario de contacto + panel informativo
    Footer.jsx          Pie de página
    Reveal.jsx          Anima un bloque al entrar en scroll (gsap + ScrollTrigger)
    RevealStagger.jsx   Igual que Reveal, pero en cascada para cuadrículas
  lib/
    gsap.js             Registro de gsap/ScrollTrigger y helper de accesibilidad
  index.css            Tokens de diseño (colores, tipografías) y estilos globales
  App.jsx              Composición de las secciones
  main.jsx             Punto de entrada, importa Bootstrap y estilos propios
```

## Animaciones de scroll (GSAP)

Cada sección (encabezados, carruseles, cuadrícula de beneficios, panel de
contacto, columnas del footer) está envuelta en `Reveal` o `RevealStagger`,
que usan **GSAP + ScrollTrigger** para:

- Animar el contenido (fade + slide-up) cuando **entra** en el viewport al
  bajar.
- **Revertir** esa animación cuando se vuelve a subir y se pasa el punto de
  inicio (`toggleActions: 'play none none reverse'`), por lo que el efecto
  se ve tanto bajando como subiendo.
- El Hero además tiene una animación de entrada al cargar la página (título,
  texto, botones y estadísticas en cascada) y un parallax sutil del frasco
  ámbar atado directamente a la posición del scroll (`scrub`), que por
  naturaleza se mueve igual en ambas direcciones.
- Todo respeta `prefers-reduced-motion`: si el sistema operativo del
  visitante lo tiene activado, `Reveal`/`RevealStagger`/`Hero` no ejecutan
  ninguna animación de GSAP y el contenido se muestra directamente.

Para ajustar la intensidad o el punto de disparo de una animación, cada
`Reveal`/`RevealStagger` acepta props opcionales: `y` (desplazamiento en px),
`duration`, `delay`, `stagger` (solo en `RevealStagger`) y `start` (punto de
disparo de ScrollTrigger, por defecto `'top 85%'`).


## Personalización rápida

- **Colores y tipografías**: todo está centralizado como variables CSS al
  inicio de `src/index.css` (`:root { --color-... }`), para poder cambiar la
  identidad visual sin tocar los componentes.
- **Contenido**: los textos de productos, beneficios y testimonios están en
  arreglos de datos al inicio de cada componente (`products`, `benefits`,
  `testimonials`) — edítalos directamente ahí.
- **Formulario de contacto**: actualmente simula el envío en el cliente
  (`Contact.jsx`, función `handleSubmit`). Para producción, conéctalo a tu
  backend, a un servicio como Formspree/Resend, o a tu CRM.

## Notas técnicas

- El diseño es **mobile-first**: los estilos base están pensados para móvil
  y se amplían con `min-width` en breakpoints de Bootstrap (`sm`, `md`, `lg`).
- Los carruseles de Swiper usan sus propios módulos (`Navigation`,
  `Pagination`, `Autoplay`, `A11y`) importados solo donde se necesitan, para
  mantener el bundle ligero.
- Se respeta `prefers-reduced-motion` y el foco de teclado es visible en
  todos los elementos interactivos.
