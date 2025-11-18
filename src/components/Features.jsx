import React from 'react'
import { Recycle, Cog, Factory, Leaf } from 'lucide-react'

const features = [
  {
    icon: Recycle,
    title: 'Blade recovery',
    desc: 'Composite blade sectioning, transport, and material reclamation with safe processes and traceability.'
  },
  {
    icon: Cog,
    title: 'Gear remanufacturing',
    desc: 'Precision inspection, grinding, and re-gearing for gearboxes and drivetrains to OEM tolerances.'
  },
  {
    icon: Factory,
    title: 'Component refurb',
    desc: 'Full refurb lines for hubs, nacelle internals, and tower hardware—with certified QA.'
  },
  {
    icon: Leaf,
    title: 'Zero-waste pathways',
    desc: 'Resin recovery, metal recycling, and circular outlets that minimize landfill.'
  }
]

export default function Features() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">What we do</h2>
          <p className="mt-4 text-white/70">End-to-end recycling and remanufacturing tailored to wind assets at scale.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300 ring-1 ring-inset ring-emerald-300/20">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-medium text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
