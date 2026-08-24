import { navItems, site, whatsappHref } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-5xl text-white">
            uno<span className="text-brand">%</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-mute">{site.tagline}</p>
          <p className="mt-4 text-xs tracking-[0.16em] text-white/50 uppercase">
            {site.address.street} · {site.address.neighborhood} · CABA
          </p>
        </div>
        <nav aria-label="Pie" className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-mute hover:text-brand">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="text-sm text-mute">
          <a href={site.phoneHref} className="block hover:text-white">
            {site.phone}
          </a>
          <a href={whatsappHref('Hola uno%.')} className="mt-2 block hover:text-white">
            WhatsApp
          </a>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block hover:text-white"
          >
            Google Maps
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-[11px] tracking-[0.14em] text-white/35 uppercase">
        © {new Date().getFullYear()} {site.legalName}. San Cristóbal, CABA.
      </p>
    </footer>
  )
}
