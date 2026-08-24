import { motion } from 'framer-motion'

const quotes = [
  {
    name: 'Lucía M.',
    role: 'Socia · San Cristóbal',
    text: 'Pasé de ir “cuando podía” a tener un horario. El gym es chico, intenso y nadie te deja colgada.',
  },
  {
    name: 'Diego R.',
    role: 'Fuerza · 8 meses',
    text: 'Me corrigieron la técnica en la primera semana. Eso no pasa en un gym de 400 personas.',
  },
  {
    name: 'Sofía P.',
    role: 'HIIT · barrio',
    text: 'Vivo a cinco cuadras. Entro, entreno, salgo. Cero vueltas y coaches que te marcan el ritmo.',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-ink px-5 py-24 lg:px-8" aria-labelledby="testimonios-title">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold tracking-[0.32em] text-brand uppercase">Comunidad</p>
        <h2 id="testimonios-title" className="font-display mt-3 mb-10 text-5xl text-white sm:text-6xl">
          TRANSFORMACIONES
          <br />
          QUE SE NOTAN
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {quotes.map((quote, i) => (
            <motion.blockquote
              key={quote.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border border-white/10 bg-ink-3 p-6"
            >
              <p className="text-sm leading-relaxed text-white/85">“{quote.text}”</p>
              <footer className="mt-6">
                <p className="font-display text-2xl text-brand">{quote.name}</p>
                <p className="text-[11px] tracking-[0.16em] text-mute uppercase">{quote.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
