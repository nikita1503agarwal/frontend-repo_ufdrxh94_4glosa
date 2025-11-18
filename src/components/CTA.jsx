import React from 'react'

export default function CTA() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/15 via-emerald-300/10 to-transparent p-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Ready to rewind?</h2>
            <p className="mt-4 text-white/80">Tell us about your fleet or decommissioning plan and we’ll propose a recovery path within 48 hours.</p>
            <form className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" placeholder="Name" />
              <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" placeholder="Company" />
              <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 sm:col-span-2" placeholder="Email" />
              <textarea rows="4" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 sm:col-span-2" placeholder="What do you need help with?" />
              <div className="sm:col-span-2 mt-2">
                <button type="button" className="inline-flex items-center rounded-full bg-emerald-400 px-6 py-3 font-medium text-emerald-950 shadow-sm shadow-emerald-400/30 hover:bg-emerald-300 transition-colors">Request proposal</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
