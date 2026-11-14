import { services, whatsappHref } from '../data/site'

export function Services() {
  return (
    <section id="servicios" className="bg-ink-2 px-5 pt-28 pb-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-display text-5xl text-white sm:text-6xl">
            MÁS QUE UN
            <br />
            GIMNASIO.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-mute">
            Entrenamiento presencial y acompañamiento a distancia. Elegí el servicio que se
            adapta a tu objetivo.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="border border-white/10 bg-ink-3 p-6">
              <p className="text-[11px] font-bold tracking-[0.22em] text-brand uppercase">
                {service.kicker}
              </p>
              <h3 className="font-display mt-3 text-3xl text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{service.copy}</p>
            </article>
          ))}
        </div>

        <a
          href={whatsappHref('Hola UNO%, quiero consultar servicios (personalizado, online, nutrición o coaching).')}
          className="btn mt-8 rounded-sm border border-brand px-7 text-xs font-extrabold tracking-[0.22em] text-white uppercase hover:bg-brand"
        >
          Consultar servicios
        </a>
      </div>
    </section>
  )
}
