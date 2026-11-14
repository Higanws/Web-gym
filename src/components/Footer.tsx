import { navItems, site, whatsappHref } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-5xl text-white">
            uno<span className="text-brand">%</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-mute">Una sede. Toda la energía.</p>
          <p className="mt-4 text-xs tracking-[0.16em] text-mute uppercase">
            {site.address.street} · {site.address.neighborhood} · CABA
          </p>
        </div>
        <nav aria-label="Pie" className="grid grid-cols-2 gap-x-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center text-sm text-mute hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="text-sm">
          <a href={site.phoneHref} className="flex min-h-11 items-center text-mute hover:text-white">
            {site.phone}
          </a>
          <a href={whatsappHref('Hola UNO%.')} className="flex min-h-11 items-center text-mute hover:text-white">
            WhatsApp
          </a>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center text-mute hover:text-white"
          >
            Google Maps
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs tracking-[0.14em] text-mute uppercase">
        © {new Date().getFullYear()} {site.legalName}. San Cristóbal, CABA.
      </p>
    </footer>
  )
}
