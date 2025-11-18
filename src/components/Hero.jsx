import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/eCQ2E3PpnWVVY5aw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-40">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
              Recycling wind turbine parts, responsibly
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Rewind gives a second life to blades, towers, and gear assemblies. We recover, refurbish, and remanufacture with minimal waste and measurable impact.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a href="#contact" className="inline-flex items-center rounded-full bg-emerald-400 px-5 py-3 font-medium text-emerald-950 shadow-sm shadow-emerald-400/30 hover:bg-emerald-300 transition-colors">
                Start a project
              </a>
              <a href="#impact" className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 font-medium text-white/90 hover:bg-white/5 transition-colors">
                See our impact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
