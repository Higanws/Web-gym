import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { images, site, whatsappHref } from '../data/site'

const slides = [
  {
    id: '01',
    image: images.hero,
    alt: 'Clase de entrenamiento en UNO% Fitness, San Cristóbal',
  },
  {
    id: '02',
    image: images.athlete,
    alt: 'Sesión de boxeo con coach en UNO% Fitness',
  },
  {
    id: '03',
    image: images.gym,
    alt: 'Sala de musculación de UNO% Fitness en Pasco 649',
  },
] as const

export function Hero() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="inicio" className="relative min-h-svh overflow-hidden bg-ink">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover object-center grayscale contrast-110 brightness-110"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-brand/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-brand/15" />
          <div className="grain pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay" />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute top-28 bottom-0 left-0 hidden w-11 lg:flex">
        <a
          href={whatsappHref('Hola UNO%, quiero una clase de prueba.')}
          className="pointer-events-auto flex w-11 items-center justify-center bg-brand text-[11px] font-extrabold tracking-[0.28em] text-white uppercase [writing-mode:vertical-rl] rotate-180"
        >
          Reserva una clase de prueba
        </a>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 hidden h-36 w-11 items-end justify-center bg-black pb-6 lg:flex">
        <span className="text-[10px] font-bold tracking-[0.3em] text-mute uppercase [writing-mode:vertical-rl] rotate-180">
          uno%
        </span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col justify-end px-5 pb-28 pt-36 lg:px-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-[11px] font-bold tracking-[0.28em] text-brand uppercase">
              UNO% Fitness · {site.address.neighborhood}
            </p>
            <div className="relative w-full max-w-xl border-2 border-brand px-4 py-5 shadow-[0_12px_40px_-8px_rgba(225,6,0,0.45)] sm:px-8 sm:py-7">
              <h1 className="font-display text-5xl leading-[0.88] text-white sm:text-6xl lg:text-[6rem]">
                <span className="block">ENTRENÁ.</span>
                <span className="block">EVOLUCIONÁ.</span>
                <span className="block text-brand">PERTENECÉ.</span>
              </h1>
            </div>
            <p className="measure mt-6 text-base leading-relaxed text-mute sm:text-lg">
              {site.tagline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#planes"
                className="btn glow-brand gap-2 rounded-sm bg-brand px-7 text-xs font-extrabold tracking-[0.22em] text-white uppercase transition hover:bg-brand-2"
              >
                Conocé nuestros planes
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#horarios"
                className="btn rounded-sm border border-brand px-7 text-xs font-extrabold tracking-[0.22em] text-white uppercase transition hover:bg-brand"
              >
                Ver horarios y clases
              </a>
            </div>
          </div>

          <div className="flex items-end justify-between gap-6 lg:justify-end">
            <div className="hidden text-right sm:block">
              <p className="font-display text-4xl text-white">UNA SEDE.</p>
              <p className="font-display text-4xl text-brand">TODA LA ENERGÍA.</p>
            </div>
            <div className="flex flex-col gap-1 text-right" aria-label="Cambiar foto del hero">
              {slides.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`inline-flex min-h-11 min-w-11 items-center justify-end font-display text-lg tracking-widest transition ${
                    i === index ? 'text-brand' : 'text-mute hover:text-white'
                  }`}
                  aria-label={`Foto ${item.id}`}
                  aria-current={i === index ? true : undefined}
                >
                  {item.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
