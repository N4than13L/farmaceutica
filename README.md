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
  index.css            Tokens de diseño (colores, tipografías) y estilos globales
  App.jsx              Composición de las secciones
  main.jsx             Punto de entrada, importa Bootstrap y estilos propios
```

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
