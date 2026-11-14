import { MapPin, Navigation, Phone } from 'lucide-react'
import { site, whatsappHref } from '../data/site'

export function Location() {
  const fullAddress = `${site.address.street}, ${site.address.neighborhood}, ${site.address.city} (${site.address.postalCode})`

  return (
    <section id="ubicacion" className="bg-ink-2">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center px-5 pt-28 pb-16 lg:px-12">
          <h2 className="font-display text-5xl text-white sm:text-6xl">
            SAN
            <br />
            CRISTÓBAL.
          </h2>
          <p className="measure mt-5 text-mute">
            Una sola sede, fácil de llegar. Estamos en Pasco, entre el ritmo del barrio y a
            minutos de Av. Independencia.
          </p>

          <address className="mt-8 space-y-4 text-sm not-italic">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-brand" size={18} aria-hidden />
              <span>
                <strong className="block text-white">{site.legalName}</strong>
                {fullAddress}
              </span>
            </p>
            <p className="flex min-h-11 items-center gap-3">
              <Phone className="shrink-0 text-brand" size={18} aria-hidden />
              <a href={site.phoneHref} className="text-white hover:text-brand">
                WhatsApp {site.phone}
              </a>
            </p>
          </address>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn glow-brand gap-2 rounded-sm bg-brand px-5 text-[11px] font-extrabold tracking-[0.18em] text-white uppercase"
            >
              <Navigation size={14} />
              Abrir ubicación en Google Maps
            </a>
            <a
              href={whatsappHref('Hola UNO%, quiero consultar por WhatsApp.')}
              className="btn rounded-sm border border-white/25 px-5 text-[11px] font-extrabold tracking-[0.18em] text-white uppercase hover:border-brand"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        <div className="min-h-[380px] border-t border-white/10 lg:min-h-[560px] lg:border-t-0 lg:border-l">
          <iframe
            title="Mapa de UNO% Fitness en Pasco 649, San Cristóbal, CABA"
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
