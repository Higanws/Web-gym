import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, site, whatsappHref } from '../data/site'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0.1, 0.25, 0.5] },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="hidden border-b border-brand/50 bg-ink text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase">
          <a href={site.phoneHref}>{site.phone}</a>
          <span>
            {site.address.street} · {site.address.neighborhood}
          </span>
          <span>{site.hoursShort}</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-6">
        <a href="#inicio" className="flex items-baseline gap-1" aria-label="uno% Fitness, inicio">
          <span className="font-display text-3xl leading-none text-white">uno</span>
          <span className="font-display text-3xl leading-none text-brand">%</span>
        </a>

        <nav className="hidden items-center gap-5 xl:gap-8 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-active={active === item.href}
              className={`nav-link text-[11px] font-bold tracking-[0.16em] uppercase xl:text-[12px] xl:tracking-[0.22em] ${
                active === item.href ? 'text-brand' : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappHref('Hola uno%, quiero reservar una clase de prueba.')}
            className="hidden rounded-sm bg-brand px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-white uppercase transition hover:bg-brand-2 glow-brand sm:inline-flex"
          >
            Reservar ahora
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-ink px-5 py-4 lg:hidden" aria-label="Móvil">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-bold tracking-[0.2em] text-white uppercase"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappHref('Hola uno%, quiero reservar una clase de prueba.')}
              className="mt-2 inline-flex justify-center rounded-sm bg-brand px-4 py-3 text-xs font-extrabold tracking-[0.18em] text-white uppercase"
              onClick={() => setOpen(false)}
            >
              Reservar ahora
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
