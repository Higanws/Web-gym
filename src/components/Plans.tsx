import { Check } from 'lucide-react'
import { extraPlans, plans, whatsappHref } from '../data/site'

export function Plans() {
  return (
    <section id="planes" className="bg-ink px-5 pt-28 pb-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-display text-5xl text-white sm:text-6xl">TU PLAN.</h2>
          <p className="mt-5 text-mute">
            Elegí la modalidad que mejor acompaña tu constancia. Confirmá vigencia y
            condiciones antes de contratar.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col border p-7 ${
                plan.featured
                  ? 'border-brand bg-ink-2 shadow-[0_12px_32px_-8px_rgba(225,6,0,0.4)]'
                  : 'border-white/10 bg-ink-3'
              }`}
            >
              <p className="text-[11px] font-bold tracking-[0.24em] text-brand uppercase">
                {plan.note}
              </p>
              <h3 className="font-display mt-3 text-4xl text-white">{plan.name}</h3>
              <p className="mt-1 font-display text-3xl text-white">{plan.price}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm text-white">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappHref(`Hola UNO%, quiero info del plan ${plan.name}.`)}
                className={`btn mt-8 rounded-sm px-4 text-[11px] font-extrabold tracking-[0.2em] uppercase ${
                  plan.featured
                    ? 'glow-brand bg-brand text-white hover:bg-brand-2'
                    : 'border border-white/25 text-white hover:border-brand hover:text-brand'
                }`}
              >
                Consultar / contratar
              </a>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {extraPlans.map((plan) => (
            <a
              key={plan.name}
              href={whatsappHref(`Hola UNO%, quiero info del plan ${plan.name}.`)}
              className="flex min-h-11 items-center justify-between border border-white/10 px-5 py-4 hover:border-brand"
            >
              <span>
                <span className="block text-[11px] font-bold tracking-[0.2em] text-brand uppercase">
                  {plan.note}
                </span>
                <span className="font-display text-2xl text-white">{plan.name}</span>
              </span>
              <span className="font-display text-2xl text-white">{plan.price}</span>
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-mute">
          Inscripción: $4.000. Valores de referencia; confirmá vigencia, condiciones y
          servicios incluidos. *Según modalidad vigente.
        </p>
      </div>
    </section>
  )
}
