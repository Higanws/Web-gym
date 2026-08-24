const items = [
  'FUERZA',
  'COMUNIDAD',
  'SAN CRISTÓBAL',
  'EL 1%',
  'SIN ATAJOS',
  'UNA SEDE',
  'CONSTANCIA',
]

export function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink py-4" aria-hidden="true">
      <div className="marquee-track flex w-max gap-10">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="font-display flex items-center gap-10 text-3xl text-white/80">
            {item}
            <span className="text-brand">%</span>
          </span>
        ))}
      </div>
    </div>
  )
}
