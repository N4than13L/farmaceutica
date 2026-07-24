import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import ProductLines from './components/ProductLines.jsx'
import WhyUs from './components/WhyUs.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ProductLines />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
