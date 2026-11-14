import { challenges, whatsappHref } from '../data/site'

export function Testimonials() {
  return (
    <section id="desafios" className="bg-ink px-5 pt-28 pb-20 lg:px-8" aria-labelledby="desafios-title">
      <div className="mx-auto max-w-6xl">
        <h2 id="desafios-title" className="font-display mb-3 text-5xl text-white sm:text-6xl">
          EL CAMBIO
          <br />
          EMPIEZA HOY.
        </h2>
        <p className="mb-8 max-w-xl text-sm text-mute">
          Incluye inscripción, evaluación, entrenamiento y orientación alimentaria profesional
          según el programa.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {challenges.map((challenge) => (
            <article key={challenge.days} className="group relative min-h-80 overflow-hidden border border-white/10">
              <img
                src={challenge.image}
                alt={`${challenge.title} en UNO% Fitness`}
                className="photo-bw absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
              <div className="relative flex h-full min-h-80 flex-col justify-end p-6">
                <p className="text-[11px] font-bold tracking-[0.22em] text-brand uppercase">
                  {challenge.days}
                </p>
                <h3 className="font-display mt-2 text-4xl text-white">{challenge.title}</h3>
                <p className="mt-3 max-w-md text-sm text-mute">{challenge.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <a
          href={whatsappHref('Hola UNO%, quiero participar del reto 21 o 60 días.')}
          className="btn glow-brand mt-8 rounded-sm bg-brand px-7 text-xs font-extrabold tracking-[0.22em] text-white uppercase hover:bg-brand-2"
        >
          Quiero participar
        </a>
      </div>
    </section>
  )
}
