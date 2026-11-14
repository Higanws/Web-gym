import { pillars } from '../data/site'

export function Stats() {
  return (
    <section className="relative z-20 -mt-12 px-4" aria-label="Propuesta UNO%">
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.id} className="bg-ink-2 px-5 py-6">
            <p className="font-display text-3xl leading-none text-brand">{pillar.id}</p>
            <p className="mt-2 text-sm font-extrabold tracking-[0.12em] text-white uppercase">
              {pillar.title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-mute">{pillar.copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
