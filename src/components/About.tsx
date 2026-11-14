import { images, site, whatsappHref } from '../data/site'

export function About() {
  return (
    <section id="gym" className="bg-ink px-5 pt-28 pb-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="relative pb-10">
          <div className="absolute -top-4 -left-4 h-24 w-24 border-t-2 border-l-2 border-brand" />
          <img
            src={images.machines}
            alt="Sala de musculación de UNO% Fitness en San Cristóbal"
            className="photo-bw aspect-[4/5] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="glow-brand absolute right-4 -bottom-6 bg-brand px-5 py-4 text-white">
            <p className="font-display text-4xl leading-none">1</p>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase">Una sede</p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-5xl text-white sm:text-6xl">
            UNA SEDE.
            <br />
            TODA LA ENERGÍA.
          </h2>
          <p className="measure mt-6 text-base leading-relaxed text-mute">
            UNO% es un espacio de entrenamiento en San Cristóbal, pensado para progresar con
            técnica, constancia y acompañamiento.
          </p>
          <p className="measure mt-4 text-base leading-relaxed text-mute">
            Grupos cuidados, entrenadores presentes y un ambiente donde te conocen. En{' '}
            {site.address.street} el cambio empieza con una decisión: volver.
          </p>
          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="border border-white/10 p-4">
              <dt className="text-[11px] font-bold tracking-[0.2em] text-brand uppercase">
                Cercanía real
              </dt>
              <dd className="mt-2 text-sm text-white">
                Coaches cerca y un ambiente donde te conocen.
              </dd>
            </div>
            <div className="border border-white/10 p-4">
              <dt className="text-[11px] font-bold tracking-[0.2em] text-brand uppercase">
                El equipo
              </dt>
              <dd className="mt-2 text-sm text-white">Coaches preparados, presentes en sala.</dd>
            </div>
          </dl>
          <a
            href={whatsappHref('Hola UNO%, quiero conocer el gym y el equipo.')}
            className="btn mt-8 rounded-sm border border-brand px-6 text-[11px] font-extrabold tracking-[0.2em] text-white uppercase hover:bg-brand"
          >
            Conocé al equipo
          </a>
        </div>
      </div>
    </section>
  )
}
