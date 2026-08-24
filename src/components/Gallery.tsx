import { images } from '../data/site'

const shots = [
  { src: images.gym, alt: 'Sala principal de uno% Fitness', span: 'md:col-span-2 md:row-span-2' },
  { src: images.squat, alt: 'Entrenamiento de sentadilla', span: '' },
  { src: images.core, alt: 'Trabajo de core y estabilidad', span: '' },
  { src: images.boxing, alt: 'Sesión de acondicionamiento', span: '' },
  { src: images.coach, alt: 'Coach de uno% con un socio', span: '' },
] as const

export function Gallery() {
  return (
    <section id="galeria" className="bg-ink-2 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold tracking-[0.32em] text-brand uppercase">Galería</p>
        <h2 className="font-display mt-3 mb-10 text-5xl text-white sm:text-6xl">
          EL PISO HABLA
        </h2>
        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px]">
          {shots.map((shot) => (
            <figure key={shot.src} className={`relative overflow-hidden ${shot.span}`}>
              <img
                src={shot.src}
                alt={shot.alt}
                className="photo-bw h-full w-full object-cover transition duration-500 hover:scale-105 hover:grayscale-0"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
