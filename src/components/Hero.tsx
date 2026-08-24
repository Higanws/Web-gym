import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { images, site, whatsappHref } from '../data/site'

const slides = [
  {
    id: '01',
    kicker: 'Estudio de fitness · San Cristóbal',
    title: ['EL', 'UNO', '%'],
    copy: 'Fuerza, técnica y constancia. Una sola sede, sin filas eternas ni distracciones.',
    image: images.hero,
  },
  {
    id: '02',
    kicker: 'Coaching cercano',
    title: ['TU', 'MEJOR', '%'],
    copy: 'Programas a medida para gente ocupada que quiere resultados reales, no humo.',
    image: images.athlete,
  },
  {
    id: '03',
    kicker: 'Barrio y comunidad',
    title: ['PASCO', '649', '%'],
    copy: 'En Pasco 649 entrenás a metros de casa, con coaches que te conocen por nombre.',
    image: images.gym,
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
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={slide.image}
            alt="Entrenamiento de alta intensidad en uno% Fitness"
            className="photo-bw h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-brand/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-brand/15" />
          <div className="grain pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay" />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute top-28 bottom-0 left-0 hidden w-11 lg:flex">
        <a
          href={whatsappHref('Hola uno%, quiero una clase de prueba gratis.')}
          className="pointer-events-auto flex w-11 items-center justify-center bg-brand text-[11px] font-extrabold tracking-[0.28em] text-white uppercase [writing-mode:vertical-rl] rotate-180"
        >
          Reserva una clase de prueba
        </a>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 hidden h-36 w-11 items-end justify-center bg-black pb-6 lg:flex">
        <span className="text-[10px] font-bold tracking-[0.3em] text-white/70 uppercase [writing-mode:vertical-rl] rotate-180">
          uno% / San Cristóbal
        </span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col justify-end px-5 pb-28 pt-36 lg:px-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.32em] text-brand uppercase">
              {site.legalName} · {slide.kicker}
            </p>
            <div className="relative max-w-xl border-2 border-brand px-5 py-5 shadow-[0_0_40px_rgba(225,6,0,0.35)] sm:px-8 sm:py-7">
              <h1 className="font-display text-7xl leading-[0.82] text-white sm:text-8xl lg:text-[7.5rem]">
                {slide.title.map((line) => (
                  <span key={line} className={line === '%' ? 'block text-brand' : 'block'}>
                    {line}
                  </span>
                ))}
              </h1>
            </div>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
              {site.tagline}. {slide.copy}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref('Hola uno%, quiero reservar una clase de prueba.')}
                className="glow-brand inline-flex items-center justify-center gap-2 rounded-sm bg-brand px-7 py-3.5 text-xs font-extrabold tracking-[0.22em] text-white uppercase transition hover:bg-brand-2"
              >
                Reservar ahora
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#planes"
                className="inline-flex items-center justify-center rounded-sm border border-brand px-7 py-3.5 text-xs font-extrabold tracking-[0.22em] text-white uppercase transition hover:bg-brand"
              >
                Ver planes
              </a>
            </div>
          </div>

          <div className="flex items-end justify-between gap-6 lg:justify-end">
            <div className="hidden text-right sm:block">
              <p className="text-[11px] font-bold tracking-[0.28em] text-white/50 uppercase">
                Únete a nuestra membresía
              </p>
              <p className="mt-2 font-display text-4xl text-white">UNA SEDE</p>
              <p className="font-display text-4xl text-brand">CERO EXCUSAS</p>
            </div>
            <div className="flex flex-col gap-4 text-right" aria-label="Slides del hero">
              {slides.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`font-display text-lg tracking-widest transition ${
                    i === index ? 'text-brand' : 'text-white/35 hover:text-white'
                  }`}
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
