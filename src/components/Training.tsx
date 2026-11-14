import { programs, whatsappHref } from '../data/site'

export function Training() {
  return (
    <section id="entrenamientos" className="bg-ink-2 px-5 pt-28 pb-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-5xl text-white sm:text-6xl">
            ELEGÍ TU
            <br />
            CAMINO.
          </h2>
          <p className="measure text-sm leading-relaxed text-mute">
            Musculación y clases guiadas para distintos objetivos. Encontrá tu actividad y
            consultá los horarios.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <article key={program.title} className="group relative min-h-72 overflow-hidden border border-brand/35">
              <img
                src={program.image}
                alt={`${program.title} en UNO% Fitness`}
                className="photo-bw absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
              <div className="relative flex h-full min-h-72 flex-col justify-end p-6">
                <h3 className="font-display text-4xl text-white">{program.title}</h3>
                <p className="mt-2 max-w-sm text-sm text-mute">{program.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={whatsappHref('Hola UNO%, quiero consultar horarios de clases.')}
            className="btn rounded-sm border border-brand px-7 text-xs font-extrabold tracking-[0.22em] text-white uppercase hover:bg-brand"
          >
            Consultar horarios
          </a>
        </div>
      </div>
    </section>
  )
}
