import { week, whatsappHref } from '../data/site'

export function Schedule() {
  return (
    <section id="horarios" className="bg-ink px-5 pt-28 pb-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-5xl text-white sm:text-6xl">TU SEMANA.</h2>
          <p className="measure text-sm leading-relaxed text-mute">
            Consultá las clases, elegí el horario y reservá tu lugar. Los cupos se habilitan
            según disponibilidad.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {week.map((item) => (
            <article key={item.day} className="border border-white/10 bg-ink-3 p-5">
              <p className="font-display text-3xl text-brand">{item.day}</p>
              <ul className="mt-4 space-y-2">
                {item.classes.map((session) => (
                  <li key={session} className="text-sm text-white">
                    {session}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={whatsappHref('Hola UNO%, quiero reservar una clase.')}
            className="btn glow-brand rounded-sm bg-brand px-7 text-xs font-extrabold tracking-[0.22em] text-white uppercase hover:bg-brand-2"
          >
            Reservar una clase
          </a>
        </div>
      </div>
    </section>
  )
}
