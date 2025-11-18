import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import Impact from './components/Impact'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_-20%,rgba(16,185,129,0.15),transparent_60%)]" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Impact />
        <CTA />
      </main>
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} rewind. All rights reserved.</p>
          <div className="text-white/50 text-sm">Built for a cleaner energy future.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
