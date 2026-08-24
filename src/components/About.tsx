import { motion } from 'framer-motion'
import { images, site } from '../data/site'

export function About() {
  return (
    <section id="gym" className="bg-ink px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 h-24 w-24 border-t-2 border-l-2 border-brand" />
          <img
            src={images.machines}
            alt="Sala de musculación de uno% Fitness en San Cristóbal"
            className="photo-bw aspect-[4/5] w-full object-cover"
          />
          <div className="absolute right-4 -bottom-6 bg-brand px-5 py-4 text-white glow-brand">
            <p className="font-display text-4xl leading-none">1%</p>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase">
              El que se presenta
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="text-xs font-bold tracking-[0.32em] text-brand uppercase">El gym</p>
          <h2 className="font-display mt-3 text-5xl text-white sm:text-6xl">
            UNA SEDE.
            <br />
            TODA LA INTENCIÓN.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-mute">
            uno% no es una cadena. Es un estudio de entrenamiento en el corazón de San
            Cristóbal, pensado para quienes quieren progresar de verdad: fuerza, técnica y
            comunidad, sin el ruido de los gimnasios masivos.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-mute">
            En {site.address.street} entrenás con coaches cerca, equipos en condiciones y un
            ambiente que te pide el extra. Acá el 1% no es un eslogan: es el hábito de
            volver.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="border border-white/10 p-4">
              <dt className="text-[11px] font-bold tracking-[0.2em] text-brand uppercase">
                Ubicación
              </dt>
              <dd className="mt-2 text-sm text-white">
                {site.address.street}, {site.address.neighborhood}
              </dd>
            </div>
            <div className="border border-white/10 p-4">
              <dt className="text-[11px] font-bold tracking-[0.2em] text-brand uppercase">
                Formato
              </dt>
              <dd className="mt-2 text-sm text-white">Sede única · grupos reducidos</dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
