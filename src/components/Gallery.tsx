import { images } from '../data/site'

const shots = [
  { src: images.gym, alt: 'Sala principal de UNO% Fitness en horario pico', span: 'md:col-span-2 md:row-span-2' },
  { src: images.squat, alt: 'Entrenamiento de fuerza en polea', span: '' },
  { src: images.core, alt: 'Clase de ABS en el césped de UNO%', span: '' },
  { src: images.turf, alt: 'Zona de clases funcionales y boxeo', span: '' },
  { src: images.racks, alt: 'Barras y racks de la sala de musculación', span: '' },
] as const

export function Gallery() {
  return (
    <section id="galeria" className="bg-ink-2 px-5 pt-28 pb-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-3 text-5xl text-white sm:text-6xl">
          ACÁ SE
          <br />
          ENTRENA EN EQUIPO.
        </h2>
        <p className="mb-8 max-w-xl text-sm text-mute">
          Personas reales, objetivos reales. Fotos del piso, las clases y el equipamiento de
          Pasco 649.
        </p>
        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px]">
          {shots.map((shot) => (
            <figure key={shot.src} className={`relative overflow-hidden ${shot.span}`}>
              <img
                src={shot.src}
                alt={shot.alt}
                className="photo-bw h-full w-full object-cover transition duration-500 hover:scale-105 hover:grayscale-0"
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
