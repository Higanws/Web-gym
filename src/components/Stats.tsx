import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 1, suffix: '', label: 'Sede boutique' },
  { value: 40, suffix: '+', label: 'Clases semanales' },
  { value: 8, suffix: '', label: 'Coaches certificados' },
  { value: 98, suffix: '%', label: 'Socios activos' },
] as const

function Count({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!start) return
    const duration = 1100
    const t0 = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      setN(Math.round(value * (1 - (1 - p) ** 3)))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, value])

  return (
    <span>
      {n}
      {suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative z-20 -mt-16 px-4" aria-label="Números de uno%">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-sm border border-white/10 bg-ink-2/95 md:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: i * 0.08 }}
            className="border-b border-white/10 px-5 py-6 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
          >
            <p className="font-display text-4xl text-brand sm:text-5xl">
              <Count value={stat.value} suffix={stat.suffix} start={inView} />
            </p>
            <p className="mt-2 text-[11px] font-bold tracking-[0.2em] text-mute uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
