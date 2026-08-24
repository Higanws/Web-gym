import { About } from './components/About'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Location } from './components/Location'
import { Marquee } from './components/Marquee'
import { Plans } from './components/Plans'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { Training } from './components/Training'
import { WhatsAppFab } from './components/WhatsAppFab'

export default function App() {
  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-brand focus:px-3 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <About />
        <Training />
        <Plans />
        <Gallery />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
