import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { whatsappHref } from '../data/site'

const plans = [
  {
    name: 'Drop-in',
    price: 'Clase suelta',
    note: 'Probá el método',
    featured: false,
    perks: ['Acceso a una sesión', 'Inducción de técnica', 'Sin permanencia'],
  },
  {
    name: 'Mensual',
    price: 'Plan base',
    note: 'El más elegido',
    featured: true,
    perks: [
      'Piso + clases ilimitadas',
      'Seguimiento de coaches',
      'Evaluación inicial',
      'Comunidad uno%',
    ],
  },
  {
    name: 'Trimestral',
    price: 'Compromiso real',
    note: 'Mejor valor',
    featured: false,
    perks: ['Todo el plan mensual', 'Prioridad en horarios pico', 'Ajuste de rutina mensual'],
  },
] as const

export function Plans() {
  return (
    <section id="planes" className="bg-ink px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.32em] text-brand uppercase">Membresía</p>
          <h2 className="font-display mt-3 text-5xl text-white sm:text-6xl">PLANES UNO%</h2>
          <p className="mt-4 text-mute">
            Precios actualizados por WhatsApp. Te armamos el plan según horarios y objetivo.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`flex flex-col border p-7 ${
                plan.featured
                  ? 'border-brand bg-ink-2 shadow-[0_0_32px_rgba(225,6,0,0.28)]'
                  : 'border-white/10 bg-ink-3'
              }`}
            >
              <p className="text-[11px] font-bold tracking-[0.24em] text-brand uppercase">
                {plan.note}
              </p>
              <h3 className="font-display mt-2 text-4xl text-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-mute">{plan.price}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm text-white/85">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappHref(`Hola uno%, quiero info del plan ${plan.name}.`)}
                className={`mt-8 inline-flex justify-center rounded-sm px-4 py-3 text-[11px] font-extrabold tracking-[0.2em] uppercase ${
                  plan.featured
                    ? 'glow-brand bg-brand text-white hover:bg-brand-2'
                    : 'border border-white/25 text-white hover:border-brand hover:text-brand'
                }`}
              >
                Consultar
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
