import React from 'react'

export default function Impact() {
  return (
    <section id="impact" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-white/70">Waste diverted</p>
            <p className="mt-2 text-4xl font-semibold text-white">12,400t</p>
            <p className="mt-2 text-white/60 text-sm">Composite, steel, and copper kept out of landfill.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-white/70">Gears remanufactured</p>
            <p className="mt-2 text-4xl font-semibold text-white">3,200+</p>
            <p className="mt-2 text-white/60 text-sm">Extending life of fleets across North America.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-white/70">Avg. CO₂ reduction</p>
            <p className="mt-2 text-4xl font-semibold text-white">-58%</p>
            <p className="mt-2 text-white/60 text-sm">Compared to new component manufacturing.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
