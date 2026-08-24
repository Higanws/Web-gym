import { Clock, MapPin, Navigation, Phone } from 'lucide-react'
import { site, whatsappHref } from '../data/site'

export function Location() {
  const fullAddress = `${site.address.street}, ${site.address.neighborhood}, ${site.address.city} (${site.address.postalCode})`

  return (
    <section id="ubicacion" className="bg-ink-2">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center px-5 py-16 lg:px-12">
          <p className="text-xs font-bold tracking-[0.32em] text-brand uppercase">Ubicación</p>
          <h2 className="font-display mt-3 text-5xl text-white sm:text-6xl">SAN CRISTÓBAL</h2>
          <p className="mt-4 max-w-md text-mute">
            Una sola sede, fácil de llegar. Estamos en Pasco, entre el ritmo del barrio y a
            minutos de Av. Independencia.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-brand" size={18} />
              <span>
                <strong className="block text-white">{site.legalName}</strong>
                {fullAddress}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 shrink-0 text-brand" size={18} />
              <a href={site.phoneHref} className="text-white hover:text-brand">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 shrink-0 text-brand" size={18} />
              <span>
                {site.hours.map((item) => (
                  <span key={item.days} className="block">
                    {item.days}: {item.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-brand inline-flex items-center justify-center gap-2 rounded-sm bg-brand px-5 py-3 text-[11px] font-extrabold tracking-[0.18em] text-white uppercase"
            >
              <Navigation size={14} />
              Abrir en Google Maps
            </a>
            <a
              href={whatsappHref('Hola uno%, quiero saber cómo llegar a Pasco 649.')}
              className="inline-flex items-center justify-center rounded-sm border border-white/25 px-5 py-3 text-[11px] font-extrabold tracking-[0.18em] text-white uppercase hover:border-brand"
            >
              Cómo llegar
            </a>
          </div>
        </div>

        <div className="min-h-[380px] border-t border-white/10 lg:min-h-[560px] lg:border-t-0 lg:border-l">
          <iframe
            title="Mapa de Uno% Fitness en Pasco 649, San Cristóbal, CABA"
            src={site.mapsEmbed}
            className="h-full min-h-[380px] w-full grayscale contrast-125 lg:min-h-[560px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
