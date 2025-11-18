import React from 'react'

const steps = [
  {
    k: '01',
    t: 'Audit & logistics',
    d: 'We assess your assets, route transport, and prepare safe dismantling or pickup.'
  },
  {
    k: '02',
    t: 'Recovery & sorting',
    d: 'Components are sectioned, sorted, and tracked with unique IDs.'
  },
  {
    k: '03',
    t: 'Refurbish & remanufacture',
    d: 'Gears and assemblies are machined, tested, and certified to spec.'
  },
  {
    k: '04',
    t: 'Reuse & circular outlets',
    d: 'Reintegrate into fleets or route materials to responsible recycling partners.'
  }
]

export default function Process() {
  return (
    <section id="process" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">How it works</h2>
          <p className="mt-4 text-white/70">Transparent, measurable steps from pickup to reuse.</p>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map(s => (
            <li key={s.k} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="text-emerald-300 font-mono text-sm">{s.k}</span>
              <h3 className="mt-2 text-white font-medium">{s.t}</h3>
              <p className="mt-2 text-white/70 text-sm leading-6">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
