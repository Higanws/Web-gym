import { motion } from 'framer-motion'
import { images } from '../data/site'

const programs = [
  {
    title: 'Fuerza',
    copy: 'Musculación con progresión real. Barras, racks y un plan que no improvisás al entrar.',
    image: images.hero,
  },
  {
    title: 'Funcional',
    copy: 'Movimiento completo, core y acondicionamiento para rendir dentro y fuera del gym.',
    image: images.ropes,
  },
  {
    title: 'HIIT',
    copy: 'Bloques cortos, alta densidad. Ideal si tenés poco tiempo y querés intensidad.',
    image: images.boxing,
  },
  {
    title: 'Personalizado',
    copy: 'Uno a uno con un coach. Técnica, objetivos y seguimiento, sin plantillas genéricas.',
    image: images.coach,
  },
] as const

export function Training() {
  return (
    <section id="entrenamientos" className="bg-ink-2 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.32em] text-brand uppercase">
              Entrenamientos
            </p>
            <h2 className="font-display mt-3 text-5xl text-white sm:text-6xl">
              ELEGÍ TU CAMINO
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-mute">
            Clases guiadas y piso de musculación. Entrá, entrená, salí mejor. Sin vueltas.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {programs.map((program, i) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.06 }}
              className="group relative min-h-72 overflow-hidden border border-brand/35"
            >
              <img
                src={program.image}
                alt={`Entrenamiento de ${program.title} en uno%`}
                className="photo-bw absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
              <div className="relative flex h-full min-h-72 flex-col justify-end p-6">
                <p className="text-[11px] font-bold tracking-[0.28em] text-brand uppercase">
                  0{i + 1}
                </p>
                <h3 className="font-display mt-1 text-4xl text-white">{program.title}</h3>
                <p className="mt-2 max-w-sm text-sm text-white/75">{program.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
